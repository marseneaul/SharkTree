export interface ImageLoadOptions {
    lazy?: boolean;
    placeholder?: string;
    errorFallback?: string;
    quality?: 'low' | 'medium' | 'high';
    format?: 'webp' | 'png' | 'jpg';
}

export interface ImageLoadResult {
    success: boolean;
    url?: string;
    error?: string;
    element?: HTMLImageElement;
}

class ImageLoader {
    private cache: Map<string, string> = new Map();
    private loadingPromises: Map<string, Promise<ImageLoadResult>> = new Map();
    private observer: IntersectionObserver | null = null;

    constructor() {
        this.setupIntersectionObserver();
    }

    /**
     * Setup intersection observer for lazy loading
     */
    private setupIntersectionObserver(): void {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target as HTMLImageElement;
                        this.loadImageFromElement(img);
                        this.observer?.unobserve(img);
                    }
                });
            },
            {
                rootMargin: '50px 0px',
                threshold: 0.1
            }
        );
    }

    /**
     * Load image with lazy loading support
     */
    async loadImage(
        src: string, 
        options: ImageLoadOptions = {}
    ): Promise<ImageLoadResult> {
        const {
            lazy = true,
            placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
            errorFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVmMmYyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2RjMjYyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+',
            quality = 'medium',
            format = 'webp'
        } = options;

        // Check cache first
        const cacheKey = `${src}-${quality}-${format}`;
        if (this.cache.has(cacheKey)) {
            return {
                success: true,
                url: this.cache.get(cacheKey),
                element: this.createImageElement(this.cache.get(cacheKey)!)
            };
        }

        // Return existing loading promise if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey)!;
        }

        const loadingPromise = this.loadImageInternal(src, options);
        this.loadingPromises.set(cacheKey, loadingPromise);

        try {
            const result = await loadingPromise;
            if (result.success && result.url) {
                this.cache.set(cacheKey, result.url);
            }
            return result;
        } finally {
            this.loadingPromises.delete(cacheKey);
        }
    }

    /**
     * Internal image loading logic
     */
    private async loadImageInternal(
        src: string, 
        options: ImageLoadOptions
    ): Promise<ImageLoadResult> {
        return new Promise((resolve) => {
            const img = new Image();
            
            img.onload = () => {
                resolve({
                    success: true,
                    url: src,
                    element: img
                });
            };

            img.onerror = (error) => {
                console.warn(`Failed to load image: ${src}`, error);
                resolve({
                    success: false,
                    error: `Failed to load image: ${src}`,
                    element: this.createErrorElement(options.errorFallback)
                });
            };

            // Set image source - handle both webpack-processed URLs and static paths
            if (src.startsWith('/') || src.startsWith('http')) {
                img.src = src;
            } else {
                // For webpack-processed URLs, they should already be correct
                img.src = src;
            }
            img.loading = 'lazy';
        });
    }

    /**
     * Create lazy-loaded image element
     */
    createLazyImageElement(
        src: string, 
        alt: string = '', 
        options: ImageLoadOptions = {}
    ): HTMLImageElement {
        const img = document.createElement('img');
        img.alt = alt;
        img.loading = 'lazy';
        
        // Set placeholder
        if (options.placeholder) {
            img.src = options.placeholder;
        }

        // Store original src for lazy loading
        img.dataset.src = src;
        img.classList.add('lazy-image');

        // Add loading styles
        img.style.transition = 'opacity 0.3s ease-in-out';
        img.style.opacity = '0.7';

        // Setup lazy loading
        if (this.observer) {
            this.observer.observe(img);
        } else {
            // Fallback: load immediately
            this.loadImageFromElement(img);
        }

        return img;
    }

    /**
     * Load image from element (for intersection observer)
     */
    private async loadImageFromElement(img: HTMLImageElement): Promise<void> {
        const src = img.dataset.src;
        if (!src) return;

        try {
            const result = await this.loadImage(src);
            if (result.success && result.url) {
                img.src = result.url;
                img.style.opacity = '1';
                img.classList.remove('lazy-image');
            } else {
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVmMmYyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2RjMjYyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                img.style.opacity = '1';
            }
        } catch (error) {
            console.error('Error loading image:', error);
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVmMmYyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2RjMjYyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
            img.style.opacity = '1';
        }
    }

    /**
     * Create image element
     */
    private createImageElement(src: string): HTMLImageElement {
        const img = document.createElement('img');
        img.src = src;
        return img;
    }

    /**
     * Create error element
     */
    private createErrorElement(fallback?: string): HTMLImageElement {
        const img = document.createElement('img');
        img.src = fallback || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVmMmYyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2RjMjYyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        return img;
    }

    /**
     * Preload multiple images
     */
    async preloadImages(urls: string[], options: ImageLoadOptions = {}): Promise<ImageLoadResult[]> {
        const promises = urls.map(url => this.loadImage(url, options));
        return Promise.allSettled(promises).then(results => 
            results.map(result => 
                result.status === 'fulfilled' ? result.value : {
                    success: false,
                    error: 'Failed to load image'
                }
            )
        );
    }

    /**
     * Clear cache
     */
    clearCache(): void {
        this.cache.clear();
        this.loadingPromises.clear();
    }

    /**
     * Get cache statistics
     */
    getCacheStats(): { cached: number; loading: number } {
        return {
            cached: this.cache.size,
            loading: this.loadingPromises.size
        };
    }

    /**
     * Destroy observer
     */
    destroy(): void {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.clearCache();
    }
}

// Export singleton instance
export const imageLoader = new ImageLoader();

// Export convenience functions
export const loadImage = (src: string, options?: ImageLoadOptions) => 
    imageLoader.loadImage(src, options);

export const createLazyImage = (src: string, alt?: string, options?: ImageLoadOptions) => 
    imageLoader.createLazyImageElement(src, alt, options);

export const preloadImages = (urls: string[], options?: ImageLoadOptions) => 
    imageLoader.preloadImages(urls, options);

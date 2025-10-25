import { SPECIES_TYPE } from "../constants/enums";
import { CONFIG_MANIFEST } from "../data/configs/manifest.js";

export interface SpeciesConfig {
    children?: any[];
    [key: string]: any;
}

export interface LoadedSpeciesData {
    config: SpeciesConfig | null;
    loaded: boolean;
    loading: boolean;
    error?: string;
}

class SpeciesDataLoader {
    private cache: Map<string, LoadedSpeciesData> = new Map();
    private loadingPromises: Map<string, Promise<SpeciesConfig>> = new Map();

    /**
     * Get all available config keys for a species type
     */
    getAvailableConfigs(speciesType: string): string[] {
        return Object.keys(CONFIG_MANIFEST[speciesType] || {});
    }

    /**
     * Load individual species data dynamically
     */
    async loadSpeciesData(speciesPath: string): Promise<any> {
        const cacheKey = `species-${speciesPath}`;
        
        // Return cached data if available
        const cached = this.cache.get(cacheKey);
        if (cached && cached.loaded) {
            return cached.config!;
        }

        // Return existing loading promise if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey)!;
        }

        // Start loading
        this.cache.set(cacheKey, {
            config: null,
            loaded: false,
            loading: true
        });

        const loadingPromise = this.loadSpeciesFile(speciesPath);
        this.loadingPromises.set(cacheKey, loadingPromise);

        try {
            const speciesData = await loadingPromise;
            
            // Update cache with loaded data
            this.cache.set(cacheKey, {
                config: speciesData,
                loaded: true,
                loading: false
            });

            return speciesData;
        } catch (error) {
            // Update cache with error
            this.cache.set(cacheKey, {
                config: null,
                loaded: false,
                loading: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
            throw error;
        } finally {
            this.loadingPromises.delete(cacheKey);
        }
    }

    /**
     * Load individual species file dynamically
     */
    private async loadSpeciesFile(speciesPath: string): Promise<any> {
        try {
            console.log(`Loading species data from ${speciesPath}`);
            
            // Dynamic import of species file
            const module = await import(`../data/species/${speciesPath}.js`);
            
            // Get the species data (usually the first export)
            const speciesKey = Object.keys(module)[0];
            if (!speciesKey || !module[speciesKey]) {
                throw new Error(`Species data not found in module ${speciesPath}`);
            }
            
            console.log(`Successfully loaded species:`, module[speciesKey]);
            return module[speciesKey];
        } catch (error) {
            console.error(`Failed to load species data from ${speciesPath}:`, error);
            throw error;
        }
    }

    /**
     * Dynamically load species configuration data
     */
    async loadSpeciesConfig(speciesType: string, configKey: string): Promise<SpeciesConfig> {
        const cacheKey = `${speciesType}-${configKey}`;
        
        // Return cached data if available
        const cached = this.cache.get(cacheKey);
        if (cached && cached.loaded) {
            return cached.config!;
        }

        // Return existing loading promise if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey)!;
        }

        // Start loading
        this.cache.set(cacheKey, {
            config: null,
            loaded: false,
            loading: true
        });

        const loadingPromise = this.loadConfigFile(speciesType, configKey);
        this.loadingPromises.set(cacheKey, loadingPromise);

        try {
            const config = await loadingPromise;
            
            // Update cache with loaded data
            this.cache.set(cacheKey, {
                config,
                loaded: true,
                loading: false
            });

            return config;
        } catch (error) {
            // Update cache with error
            this.cache.set(cacheKey, {
                config: null,
                loaded: false,
                loading: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
            throw error;
        } finally {
            this.loadingPromises.delete(cacheKey);
        }
    }

    /**
     * Load configuration file dynamically using manifest
     */
    private async loadConfigFile(speciesType: string, configKey: string): Promise<SpeciesConfig> {
        try {
            const manifest = CONFIG_MANIFEST[speciesType];
            if (!manifest || !manifest[configKey]) {
                throw new Error(`Configuration ${configKey} not found in manifest for ${speciesType}`);
            }

            const fileName = manifest[configKey];
            console.log(`Loading config for ${speciesType}/${configKey} from ${fileName}`);
            
            // Dynamic import based on manifest
            const module = await import(`../data/configs/${speciesType}/${fileName}`);
            const configName = `${configKey}Config`;
            
            if (!module[configName]) {
                throw new Error(`Configuration ${configName} not found in module`);
            }
            
            const config = module[configName];
            
            // Check if config is a function (async dynamic config)
            if (typeof config === 'function') {
                console.log(`Loading dynamic config: ${configName}`);
                return await config();
            }
            
            console.log(`Successfully loaded config:`, config);
            return config;
        } catch (error) {
            console.error(`Failed to load config for ${speciesType}/${configKey}:`, error);
            throw error;
        }
    }

    /**
     * Preload multiple configurations
     */
    async preloadConfigs(speciesType: string, configKeys: string[]): Promise<void> {
        const promises = configKeys.map(key => 
            this.loadSpeciesConfig(speciesType, key).catch(error => {
                console.warn(`Failed to preload ${speciesType}/${key}:`, error);
                return null;
            })
        );
        
        await Promise.allSettled(promises);
    }

    /**
     * Get loading status for a configuration
     */
    getLoadingStatus(speciesType: string, configKey: string): LoadedSpeciesData | null {
        const cacheKey = `${speciesType}-${configKey}`;
        return this.cache.get(cacheKey) || null;
    }

    /**
     * Clear cache for a specific configuration
     */
    clearCache(speciesType: string, configKey: string): void {
        const cacheKey = `${speciesType}-${configKey}`;
        this.cache.delete(cacheKey);
        this.loadingPromises.delete(cacheKey);
    }

    /**
     * Clear all cache
     */
    clearAllCache(): void {
        this.cache.clear();
        this.loadingPromises.clear();
    }

    /**
     * Get cache statistics
     */
    getCacheStats(): { total: number; loaded: number; loading: number; errors: number } {
        const stats = { total: 0, loaded: 0, loading: 0, errors: 0 };
        
        for (const data of this.cache.values()) {
            stats.total++;
            if (data.loaded) stats.loaded++;
            if (data.loading) stats.loading++;
            if (data.error) stats.errors++;
        }
        
        return stats;
    }
}

// Export singleton instance
export const speciesDataLoader = new SpeciesDataLoader();

// Export convenience functions
export const loadSpeciesConfig = (speciesType: string, configKey: string) => 
    speciesDataLoader.loadSpeciesConfig(speciesType, configKey);

export const preloadSpeciesConfigs = (speciesType: string, configKeys: string[]) => 
    speciesDataLoader.preloadConfigs(speciesType, configKeys);

export const getSpeciesLoadingStatus = (speciesType: string, configKey: string) => 
    speciesDataLoader.getLoadingStatus(speciesType, configKey);

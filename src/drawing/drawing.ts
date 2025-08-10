export class Drawing {
    static adjustforPixelRatios(window: Window, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, widthAdjustLimit = 0) {
        const devicePixelRatio = window ? window.devicePixelRatio : 1;
        const canvasRect = canvas.getBoundingClientRect();
        canvas.width = Math.max(
            (Math.round(devicePixelRatio * canvasRect.right) -
            Math.round(devicePixelRatio * canvasRect.left)),
            devicePixelRatio * widthAdjustLimit
        );
        canvas.height = (Math.round(devicePixelRatio * canvasRect.bottom) -
            Math.round(devicePixelRatio * canvasRect.top)
        );
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }
}
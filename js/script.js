class PaintCanvas {
    constructor(canvasId) {
        this.paintCanvas = document.getElementById(canvasId);
        this.context = this.paintCanvas.getContext('2d');
        this.color = 'black';
        this.radius = 10;
        this.isPainting = false;

        this.paintCanvas.addEventListener('mousedown', () => this.startPaint());
        this.paintCanvas.addEventListener('mousemove', (event) => this.doPaint(event));
        this.paintCanvas.addEventListener('mouseup', () => this.endPaint());
    }

    setCanvasWidth(value) {
        if (this.isNumeric(value)) {
            this.paintCanvas.width = value;
        }
    }

    setCanvasHeight(value) {
        if (this.isNumeric(value)) {
            this.paintCanvas.height = value;
        }
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.paintCanvas.width, this.paintCanvas.height);
    }

    paintCircle(x, y) {
        this.context.beginPath();
        this.context.arc(x, y, this.radius, 0, Math.PI * 2, true);
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    isNumeric(value) {
        return !isNaN(value);
    }

    startPaint() {
        this.isPainting = true;
    }

    endPaint() {
        this.isPainting = false;
    }

    doPaint(event) {
        if (this.isPainting) {
            const { offsetX: x, offsetY: y } = event;
            this.paintCircle(x, y);
        }
    }

    setColor(newColor) {
        this.color = newColor;
    }

    resizeBrush(newSize) {
        this.radius = newSize;
        document.getElementById('sizeOutput').value = newSize;
    }
}

const paintCanvas = new PaintCanvas('can');

function setColor(newColor) {
    paintCanvas.setColor(newColor);
}

function resizeBrush(newSize) {
    paintCanvas.resizeBrush(newSize);
}

function setCanvasWidth(value) {
    paintCanvas.setCanvasWidth(value);
}

function setCanvasHeight(value) {
    paintCanvas.setCanvasHeight(value);
}

function clearCanvas() {
    paintCanvas.clearCanvas();
}
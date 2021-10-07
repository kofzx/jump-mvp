import camera from "./camera";

class Scene {
    constructor() {
        this.instance = null;
    }

    init() {
        this.instance = new THREE.Scene();
        const renderer = this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,     // 抗锯齿
            preserveDrawingBuffer: true,    // 保存到一个绘制的缓冲区
        });

        this.camera = camera;

        this.camera.init();

        this.axesHelper = new THREE.AxesHelper(100);
        
        this.instance.add(this.axesHelper);
        this.instance.add(this.camera.instance);
    }

    render() {
        this.renderer.render(this.instance, this.camera.instance);
    }
}

export default new Scene();
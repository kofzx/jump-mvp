export default class GameOverPage {
    constructor(callbacks) {
        this.callbacks = callbacks;
    }

    init(options) {
        this.initGameOverCanvas(options);
    }

    initGameOverCanvas(options) {
        const aspect = window.innerHeight / window.innerWidth;
        this.scene = options.scene;
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // 此处的 texture 引用 canvas（canvas 对于浏览器来说，本质为一张图片）
        this.texture = new THREE.Texture(this.canvas);
        this.texture.minFilter = THREE.LinearFilter;
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            transparent: true
        });
        this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
        this.obj = new THREE.Mesh(this.geometry, this.material);
        this.obj.position.z = 1;
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = '#333';
        this.context.fillRect(
            (window.innerWidth - 200) / 2, 
            (window.innerHeight - 200) / 2,
            200,
            100
        );
        this.context.fillStyle = '#eee';
        this.context.font = '20px Georgia';
        this.context.fillText(
            'Game Over',
            (window.innerWidth - 200) / 2 + 50, 
            (window.innerHeight - 200) / 2 + 55,
        );
        this.texture.needsUpdate = true;
        this.obj.visible = false;
        this.scene.add(this.obj);
    }

    show() {
        this.obj.visible = true;
    }

    hide() {
        this.obj.visible = false;
    }
}
import sceneConf from "../../confs/scene-conf";

class Camera {
    constructor() {
        this.instance = null;
    }

    init() {
        const aspect = window.innerHeight / window.innerWidth;
        // left, right, top, bottom, near(近平面), far(远平面)
        this.instance = new THREE.OrthographicCamera(
            -sceneConf.frustumsize, 
            sceneConf.frustumsize, 
            sceneConf.frustumsize * aspect, 
            -sceneConf.frustumsize * aspect, 
            -100, 
            85
        );
        this.instance.position.set(-10, 10, 10);
        this.target = new THREE.Vector3(0, 0, 0);
        this.instance.lookAt(this.target);
    }
}

export default new Camera();
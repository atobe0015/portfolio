import * as THREE from "three";
let frame = 0
export default {
  data() {

    const win = {
      w: window.outerWidth,
      h: window.outerHeight
    }
    const scene = new THREE.Scene();
    const renderer = null;
    // const camera = new THREE.PerspectiveCamera(45, win.w / win.h);
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    camera.position.set(0, 0, 1000);
    const light = new THREE.DirectionalLight(0xffffff);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    // const hayate_geometry = new THREE.BoxGeometry(1, 1, 1);
    // const hayate_material = new THREE.MeshNormalMaterial();
    // const hayate = new THREE.Mesh(hayate_geometry, hayate_material);

    return {
      scene,
      renderer,
      camera,
      light,
      geometry,
      material,
      cube,
      // hayate,
      win
    };
  },
  mounted() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.$refs.stage
    });

    this.renderer.setPixelRatio(1);
    this.renderer.setSize(this.win.w, this.win.h);
    this.camera.position.set(0, 0, 2);
    this.light.position.set(0, 0, 10);
    this.scene.add(this.cube);
    this.scene.add(this.light);

    this.animate();
  },
  methods: {
    update() {
      this.cube.rotation.x += 0.02;
      this.cube.rotation.y += 0.02;

      // const radian = 2 * Math.PI / 180;
      // this.camera.position.x = 1000 * Math.sin(radian);
      // this.camera.position.z = 1000 * Math.cos(radian);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.update()
      frame++
      console.log(frame)
      // if (frame % 2 == 0) {
      //   this.renderer.render(this.scene, this.camera);
      // }
      this.renderer.render(this.scene, this.camera);


    }
  }
}
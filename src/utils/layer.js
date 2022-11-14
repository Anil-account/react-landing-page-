import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";

const loader = new GLTFLoader();
let flag = true;

export function init() {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 5;
  camera.rotation.z = 1;
  const scene = new THREE.Scene();

  const light = new THREE.HemisphereLight (0xffffbb, 0x080820, 2 );
  scene.add(light);

  loader.load("/models/skull/scene.gltf", (gltf) => {
    let model = gltf.scene;
    model.scale.set(0.45, 0.45, 0.45);
    gsap.to(camera.position, { z: 1, duration: 1, ease: "back.out(1.7)" });
    gsap.to(camera.rotation, { z: 0, duration: 1, });
    gsap.to(model.rotation,{ x : .3, duration: 1, delay:1 });
    gsap.to(model.rotation,{ y : Math.PI*1.7, duration: 45, delay:1 });
    gsap.to(model.scale,{delay:1, duration:1, x:.30, y:.30, z:.30});
    gsap.to(model.position,{delay:1, duration:1, x:.75, y:.3});    
  scene.add(model);
  });

}

// animation

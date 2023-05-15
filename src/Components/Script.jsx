import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let currentMount = null;

// Creando la ecena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 100 / 100, 0.1, 1000);

// ? Configurando la posición de la cámara
camera.position.y = 10;
camera.position.z = 10;
camera.position.x = 9;

// Camera es nuestro punto de vista
scene.add(camera);

// Renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff);
renderer.alpha = true;
renderer.autoClearColor;

// ************** RESIZE DEL RENDER ************** //
const resize = () => {
  renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.alpha = true;
  renderer.antialias = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

// **************** Luces para los objetos **************** //

// Luz para usarlo cuando desaparece por el THREE.MeshStandardMaterial
const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
scene.add(ambientLight);

// const AO = new THREE.AmbientLight(0xcccccc, 1.3);
// scene.add(AO);

const point = new THREE.PointLight(0xcccccc, 0.9);
point.position.y = 8;
scene.add(point);

const directionLigth = new THREE.DirectionalLight(0xcccccc, 0.7);
directionLigth.position.set(5);
scene.add(directionLigth);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// **** Apartir de aca solo van los objetos que se desean renderizar **** //

// ? Perro es lo mas importante => loader para la animacion
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  "/images/dog.glb",
  (gltf) => {
    const modelScene = gltf.scene;
    scene.add(modelScene);

    function animate() {
      requestAnimationFrame(animate);

      // Actualizar la rotación del modelo //
      modelScene.rotation.y += 0.002;

      // Renderizar la escena
      renderer.render(scene, camera);
    }

    // Iniciar la animación
    animate();
  },
  () => {},
  () => {}
);

//* ************  Para el color trasparente  ********* */
let gl = renderer.getContext("webgl", { alpha: true });
gl.clearColor(0.0, 0.0, 0.0, 0.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// * Controls
const controls = new OrbitControls(camera, renderer.domElement);
// Esto hace movimientos
//controls.target = new THREE.Vector3(3, 3, 3);

// Renderizado final
const animacion = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animacion);
};
animacion();

// Exportar la funcion del componte del renderizado el renderizado
export const mountScene = (mountRef) => {
  currentMount = mountRef.current;
  resize();
  currentMount.appendChild(renderer.domElement);
};

// Clean up scene
export const cleanScenexd = () => {
  // scene.dispose();
  currentMount.removeChild(renderer.domElement);
};

import { gsap } from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let currentMount = null;
const Timeline = new gsap.timeline({
  defaults: {
    duration: 2,
  },
});

// Creando la escena
const scene = new THREE.Scene();

// Obteniendo el tamaño de la ventana del dispositivo
const width = window.innerWidth;
const height = window.innerHeight;

// Configurando la cámara
const aspectRatio = width / height;
let fieldOfView;

if (width <= 400) {
  fieldOfView = 30; // Tamaño de cámara para ancho de ventana menor o igual a 400px
} else if (width <= 800) {
  fieldOfView = 40; // Tamaño de cámara para ancho de ventana entre 401px y 800px
} else {
  fieldOfView = 22; // Tamaño de cámara para ancho de ventana mayor a 800px
}

const nearPlane = 0.1;
const farPlane = 1000;

const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane
);

// Configurando la posición de la cámara
camera.position.y = 95;
camera.position.z = -60;
camera.position.x = 180;

// Ajustando el tamaño de la ventana
camera.aspect = aspectRatio;
camera.updateProjectionMatrix();

// Agregando la cámara a la escena
scene.add(camera);

// Renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xb8a192, 10);
renderer.alpha = true;
renderer.autoClearColor;
renderer.autoClearStencil;

// ************** RESIZE DEL RENDER ************** //
const resize = () => {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
  renderer.antialias = true;
  renderer.alpha = true;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

// **************** Luces para los objetos **************** //

// Luz para usarlo cuando desaparece por el THREE.MeshStandardMaterial
const ambientLight = new THREE.AmbientLight(0xb8a192, 0.7);
scene.add(ambientLight);

const point = new THREE.PointLight(0xb8a192, 1.2);
point.position.y = 8;
point.shadow.mapSize.width = 1024;
scene.add(point);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// **** Apartir de aca solo van los objetos que se desean renderizar **** //

// ? Perro es lo mas importante => loader para la animacion
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  "/images/room.glb",
  (gltf) => {
    const modelScene = gltf.scene;
    scene.add(modelScene);

    function animate() {
      requestAnimationFrame(animate);

      // Renderizar la escena
      renderer.render(scene, camera);
    }

    // Iniciar la animación
    animate();
  },
  () => {},
  () => {}
);

const loader = new THREE.TextureLoader();

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
export const PixelRoom = (pixel) => {
  currentMount = pixel.current;
  resize();
  currentMount.appendChild(renderer.domElement);
};

// Clean up scene
export const cleanScenexd = () => {
  // scene.dispose();
  currentMount.removeChild(renderer.domElement);
};

// Animaciones con GSAP

export const moveRoom = () => {
  Timeline.from(
    camera.rotation,
    {
      y: Math.PI * 2,
    },
    "+=1"
  )
    .to(camera, {
      zoom: 1.06,
      duration: 2,
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    })
    .to(controls.target, {
      x: -0.1,
      y: 1.3,
      z: 0.7,
      duration: 2,
      ease: "power3. inOut",
    });
    
};
moveRoom();

import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// on crée la scene
const scene = new THREE.Scene();

// on crée la camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

// on crée le renderer (pour afficher la 3D)
// <-----------------------------
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render( scene, camera);
// ----------------------------->

// On permet de controlé la camera avec la souris
const controls = new OrbitControls(camera, renderer.domElement);

// on met un background 
const spaceTexture = new THREE.TextureLoader().load('material/space.jpg');
scene.background = spaceTexture;


// on crée le donut
// <-----------------------------
const geometry = new THREE.TorusGeometry( 10,3,16,100)
const material = new THREE.MeshStandardMaterial( { color : 0xFF6347} );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)
// ----------------------------->

// on crée un point de lumiere, et la lumiere ambient
// <-----------------------------
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)
const ambientLigth = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLigth)
// ----------------------------->


// on affiche ou est le point de lumiere et un grille
// <-----------------------------
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper, gridHelper)
// ----------------------------->



// on crée des 200 étoiles au hazard
// <-----------------------------
function addStar() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial( {color: 0xffffff})
	const star = new THREE.Mesh( geometry, material );

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

	star.position.set(x,y,z);
	scene.add(star)
}	
Array(200).fill().forEach(addStar)
// ----------------------------->


// on crée un cube avec une image
// <----------------------------
const enzoTexture = new THREE.TextureLoader().load('material/enzo.png');

const enzo = new THREE.Mesh(
	new THREE.BoxGeometry(3,3,3),
	new THREE.MeshBasicMaterial( {map: enzoTexture})
);

scene.add(enzo);
enzo.position.z = -5;
enzo.position.x = 2;
// ---------------------------->


//on crée une lune
// <----------------------------
const moonTexture = new THREE.TextureLoader().load('material/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('material/normal.jpg');


const moon = new THREE.Mesh(
	new THREE.SphereGeometry(3,32,32),
	new THREE.MeshStandardMaterial({
		map: moonTexture,
		normalMap: normalTexture
	})

);

scene.add(moon);
moon.position.z = 30;
moon.position.setX(-10);


// ---------------------------->


//On fait une rotation des elements en fonction du scroll
// <----------------------------
function moveCamera() {
	
	
	const t = document.body.getBoundingClientRect().top;
	moon.rotation.x += 0.05;
	moon.rotation.y += 0.005;
	moon.rotation.z += 0.05;
	
	enzo.rotation.y += 0.01;
	enzo.rotation.z += 0.01;
	
	// while (camera.rotation.z < 32.6) {
	camera.position.z = t * -0.01;
	camera.position.x = t * -0.0002;
	camera.rotation.y = t * -0.0002;

	// }	
	console.log(camera.position.z)
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();
// ---------------------------->

// on lance l'annimation en boucle
// <-----------------------------
function animate(){
	requestAnimationFrame( animate );

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;
	
	moon.rotation.x += 0.005;
	// controls.update();

	renderer.render( scene, camera );
}

animate()
// ----------------------------->
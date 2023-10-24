// ------ ------ ------ ------ ------ ------ ------ ------
// Import                      ------ ------ ------ ------
// ------ ------ ------ ------ ------ ------ ------ ------
import * as THREE from 'three';
// import WebGL from 'three/addons/capabilities/WebGL.js'; // (Test) WebGL, can remove
// import { FontLoader } from 'three/addons/loaders/FontLoader.js'; // Demo 3
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'; // Demo 3
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Demo 4
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Demo 4

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();




// ------ ------ ------ ------ ------ ------ ------ ------
// Creating the scene          ------ ------ ------ ------
// ------ ------ ------ ------ ------ ------ ------ ------
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();




// // Demo 1
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Add a cube                  ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
// camera.position.z = 5;
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Add a cube animation        ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );

// 	// Creat animation for cube
// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;
// }
// animate();




// // Demo 2
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Drawing lines               ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Add material
// const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
// // Add vertices
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
// // Put them together to form a line
// const line = new THREE.Line( geometry, material );
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Call render                 ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// scene.add( line );
// renderer.render( scene, camera );




// // Demo 3
// // ------ ------ ------ ------ ------ ------ ------ ------
// // Creating text               ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// const loader = new FontLoader();
// loader.load( '/libJS/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
//   const geometry = new TextGeometry( 'Hello three.js!', {
//       font: font,
// 	  size: 80,
// 	  height: 5,
// 	  curveSegments: 12,
// 	  bevelEnabled: true,
// 	  bevelThickness: 10,
// 	  bevelSize: 8,
// 	  bevelOffset: 0,
// 	  bevelSegments: 5
// 	} );
// } );




// Demo 4
// ------ ------ ------ ------ ------ ------ ------ ------
// Loading 3D models           ------ ------ ------ ------
// ------ ------ ------ ------ ------ ------ ------ ------
const loader = new GLTFLoader();
loader.load( '../element3D/mibs.glb', function ( gltf ) {
  scene.add( gltf.scene );
}, undefined, function ( error ) {
  console.error( error );
} );
  renderer.render( scene, camera );




// // ------ ------ ------ ------ ------ ------ ------ ------
// // (Test) WebGL, can remove    ------ ------ ------ ------
// // ------ ------ ------ ------ ------ ------ ------ ------
// if ( WebGL.isWebGLAvailable() ) {
// 	// Initiate function or other initializations here
// 	animate();

// } else {
// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );
// }
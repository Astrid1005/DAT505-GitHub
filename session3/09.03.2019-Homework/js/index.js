// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );


// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry1 = new THREE.CircleBufferGeometry( 150, 320 );
var geometry2 = new THREE.CircleBufferGeometry( 260, 420 );
var geometry3 = new THREE.CircleBufferGeometry( 360, 520 );
var geometry4 = new THREE.TorusGeometry( 75, 3, 20, 100 );
var geometry5 = new THREE.TorusGeometry( 300, 3, 20, 100 );
var geometry6 = new THREE.TorusGeometry( 400, 3, 20, 100 );

// MATERIAL 1:
var material1 = new THREE.MeshNormalMaterial();

//MATERIAL 2:
var texture = new THREE.TextureLoader().load("texture.jpg");
var material2 = new THREE.MeshBasicMaterial({map : texture});

//MATERIAL 3:
var material3 = new THREE.MeshNormalMaterial();

//MATERIAL 4:


//MATERIAL 5 (non-shiny material):


//MATERIAL 6 (combination of shiny + non-shinny):


//MATERIAL 7 (physical-based material)


//MATERIAL 8


//MATERIAL 9


//MATERIAL 10


//MATERIAL 11
material11 = new THREE.MeshLambertMaterial( { color: 0x666666, emissive: 0xff0000 } );

//MATERIAL 12
var material12 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );

//MATERIAL13


//MATERIAL 14
var material14 =  new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true } );

//MATERIAL 15


var mesh1 = new THREE.Mesh( geometry1, material2 );
mesh1.position.z = -1000;
mesh1.position.x = 0;
mesh1.position.y = 0;

var mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.z = -1200;
mesh2.position.x = 0;
mesh2.position.y = 0;

var mesh3 = new THREE.Mesh( geometry3, material2 );
mesh3.position.z = -1400;
mesh3.position.x = 0;
mesh3.position.y = 0;

var mesh4 = new THREE.Mesh( geometry4, material11 );
mesh4.position.z = -1000;
mesh4.position.x = 0;
mesh4.position.y = 75;

var mesh5 = new THREE.Mesh( geometry4, material11 );
mesh5.position.z = -1000;
mesh5.position.x = 0;
mesh5.position.y = -75;

var mesh6 = new THREE.Mesh( geometry4, material11 );
mesh6.position.z = -1000;
mesh6.position.x = 75;
mesh6.position.y = 0;

var mesh7 = new THREE.Mesh( geometry4, material11 );
mesh7.position.z = -1000;
mesh7.position.x = -75;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry4, material14 );
mesh8.position.z = -1000;
mesh8.position.x = -37.5;
mesh8.position.y = 37.5;

var mesh9 = new THREE.Mesh( geometry4, material14 );
mesh9.position.z = -1000;
mesh9.position.x = -37.5;
mesh9.position.y = -37.5;

var mesh10 = new THREE.Mesh( geometry4, material14 );
mesh10.position.z = -1000;
mesh10.position.x = 37.5;
mesh10.position.y = 37.5;

var mesh11 = new THREE.Mesh( geometry4, material14 );
mesh11.position.z = -1000;
mesh11.position.x = 37.5;
mesh11.position.y = -37.5;

var mesh12 = new THREE.Mesh( geometry4, material3 );
mesh12.position.z = -1100;
mesh12.position.x = 100;
mesh12.position.y = 100;

var mesh13 = new THREE.Mesh( geometry4, material3 );
mesh13.position.z = -1100;
mesh13.position.x = 140;
mesh13.position.y = 0;

var mesh14 = new THREE.Mesh( geometry4, material3 );
mesh14.position.z = -1100;
mesh14.position.x = 100;
mesh14.position.y = -100;

var mesh15 = new THREE.Mesh( geometry4, material3 );
mesh15.position.z = -1100;
mesh15.position.x = 0;
mesh15.position.y = -140;

var mesh16 = new THREE.Mesh( geometry4, material3 );
mesh16.position.z = -1100;
mesh16.position.x = -100;
mesh16.position.y = -100;

var mesh17 = new THREE.Mesh( geometry4, material3 );
mesh17.position.z = -1100;
mesh17.position.x = -140;
mesh17.position.y = 0;

var mesh18 = new THREE.Mesh( geometry4, material3 );
mesh18.position.z = -1100;
mesh18.position.x = -100;
mesh18.position.y = 100;

var mesh19 = new THREE.Mesh( geometry4, material3 );
mesh19.position.z = -1100;
mesh19.position.x = 0;
mesh19.position.y = 140;

var mesh20 = new THREE.Mesh( geometry5, material11 );
mesh20.position.z = -1300;
mesh20.position.x = 0;
mesh20.position.y = 0;

var mesh21 = new THREE.Mesh( geometry6, material14 );
mesh21.position.z = -1500;
//mesh21.position.x = 0;
//mesh21.position.y = 0;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
scene.add( mesh13 );
scene.add( mesh14 );
scene.add( mesh15 );
scene.add( mesh16 );
scene.add( mesh17 );
scene.add( mesh18 );
scene.add( mesh19 );
scene.add( mesh20 );
scene.add( mesh21 );

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  //mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  //mesh1.rotation.y = rot+1;
  mesh1.rotation.z = rot+1;


  //mesh2.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh2.rotation.y = rot-2;
mesh2.rotation.z = -rot;

  //mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  //mesh3.rotation.y = rot+2;
mesh3.rotation.z = rot+1;

  //mesh4.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh4.rotation.y = rot-2;
mesh4.rotation.z = rot+1;

  //mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  //mesh5.rotation.y = rot+2;
mesh5.rotation.z = rot+1;

  //mesh6.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh6.rotation.y = rot-2;
mesh6.rotation.z = rot+1;

  //mesh7.rotation.x = rot+2; //Continuously rotate the mesh
  //mesh7.rotation.y = rot+2;
mesh7.rotation.z = rot+1;

  //mesh8.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh8.rotation.y = rot-2;
mesh8.rotation.z = rot+1;

  //mesh9.rotation.x = rot+2; //Continuously rotate the mesh
  //mesh9.rotation.y = rot+2;
mesh9.rotation.z = rot+1;

  //mesh10.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh10.rotation.y = rot-2;
mesh10.rotation.z = rot+1;

  //mesh11.rotation.x = rot+2; //Continuously rotate the mesh
  //mesh11.rotation.y = rot+2;
mesh11.rotation.z = rot+1;

  //mesh12.rotation.x = rot-2; //Continuously rotate the mesh
  //mesh12.rotation.y = rot-2;
mesh12.rotation.z = rot+1;

mesh13.rotation.z = rot+1;

mesh14.rotation.z = rot+1;

mesh15.rotation.z = rot+1;

mesh16.rotation.z = rot+1;

mesh17.rotation.z = rot+1;

mesh18.rotation.z = rot+1;

mesh19.rotation.z = rot+1;

mesh20.rotation.z = rot+1;

mesh21.rotation.z = rot+1;

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render

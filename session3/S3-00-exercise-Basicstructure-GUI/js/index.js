//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );

  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );

//Add controller values for gui
//Set present values for controllers
  var controller = new function(){
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = -400;

    this.rotationX = 1;
    this.rotationY = 1;
    this.rotationZ = 1;
  }

  //Create a new DAT.GUI
  var gui = new dat.GUI();

//Define the folder name
  var f1 = gui.addFolder('Scale');
  var f2 = gui.addFolder('Position');
  var f3 = gui.addFolder('Rotation');

  //Add the first controller {scale x}
  f1.add(controller,'scaleX',0.1,5).onChange(function(){
    mesh.scale.x = (controller.scaleX);
  });

  //Add the first controller {scale y}
  f1.add(controller,'scaleY',0.1,5).onChange(function(){
    mesh.scale.y = (controller.scaleY);
  });

  //Add the first controller {scale z}
  f1.add(controller,'scaleZ',0.1,5).onChange(function(){
    mesh.scale.z = (controller.scaleZ);
  });

  //Add the Second controller {position x}
  f2.add(controller,'positionX',-500,500).onChange(function(){
    mesh.position.x = (controller.positionX);
  });


  //Add the Second controller {position y}
  f2.add(controller,'positionY',-500,500).onChange(function(){
    mesh.position.y = (controller.positionY);
  });

  //Add the Second controller {position z}
  f2.add(controller,'positionZ',-5000,-400).onChange(function(){
    mesh.position.z = (controller.positionZ);
  });

  //Add the Third controller {rotation x}
  f3.add(controller,'rotationX',-3.14,3.14).onChange(function(){
    mesh.rotation.x = (controller.rotationX);
  });

  //Add the Third controller {rotation y}
  f3.add(controller,'rotationY',-3.14,3.14).onChange(function(){
    mesh.rotation.y = (controller.rotationY);
  });

  //Add the Third controller {rotation z}
  f3.add(controller,'rotationZ',-3.14,3.14).onChange(function(){
    mesh.rotation.z = (controller.rotationZ);
  });
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();

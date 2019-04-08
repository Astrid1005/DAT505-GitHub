# An exercise which shows that many motionless wireframe white cubes in the screen.

## Introduction

The project is an exercise which required me to creat a view of scene likes the following pictures were given by teacher. Then I created a lot of motionless wireframe white cubes to simulate the view of the pictures. People can have a first person view in this project. They can move the mouse to control the view to see the whole scene.

<p align="center">
<img alt="abramovic" src="assets/example1.jpg" width="420" />
<img alt="abramovic" src="assets/example2.jpg" width="420" />
</p>

---

## Code

#### This part explains the code used for the **index.js**

* The following code defines some global variables

```JavaScript
// GLOBALS ======================================================
var camera, scene, renderer, controls, clock;
var INV_MAX_FPS = 1 / 100, frameDelta = 0;
var floor;
```

* The following code sets the color of scene's background, a renderer to update the view of the scene.

```JavaScript
// SETUP ========================================================
function setup() {
  document.body.style.backgroundColor = '#e8e5e0'; //The color of the scene's background
  setupThreeJS();
  setupWorld();

//Update the view of the scene
  requestAnimationFrame(function animate() {
    draw();

    frameDelta += clock.getDelta();
    while (frameDelta >= INV_MAX_FPS) {
      update(INV_MAX_FPS);
      frameDelta -= INV_MAX_FPS;
    }

    requestAnimationFrame( animate );
  });
}
```

* The following code creatsa new scene, fog and color of fog, a camera, a renderer, the size of window and FirstPersonControls.

```JavaScript
function setupThreeJS() {
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xFFFFFF, 0.2); //The color of fog

//creat a camera and set position of camera
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.y = 400;
  camera.position.z = 400;
  camera.rotation.x = -45 * Math.PI / 180;

//render the scene
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMapEnabled = true; //creat shadow
  renderer.setClearColor(0xe8e5e0, 1);

  document.body.appendChild( renderer.domElement );

//move mouse to watch the scene in the first person view
  clock = new THREE.Clock();
  controls = new THREE.FirstPersonControls(camera);
  controls.movementSpeed = 100;
  controls.lookSpeed = 0.1;
}
```

* The following code creates a PlaneGeometry as the floor in the scene firstly. Secondly, the code creats one material for the floor. Thirdly, the code creates mesh to combine the floor with material, then it defines the rotation of mesh, meanwhile the code makes floor receive shadow. Fourthly, the code creats white wireframe cubes and clones cubes and sets them to random position, meanwhile cubes' scale is random too. Finally, the code makes cubes receive shadow and creats a light to creat shadow, meanwhile it adds light to scene.

```JavaScript
function setupWorld() {
  //Create the geometry for the floor
  var geo = new THREE.PlaneGeometry(2000, 2000, 40, 40);
  var mat = new THREE.MeshPhongMaterial({color: 0xFFFFFF, overdraw: true});
  floor = new THREE.Mesh(geo, mat);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  scene.add(floor);

  //Settings for models and material
  var geometry = new THREE.CubeGeometry( 1, 1, 1 );
  //geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

  var material = new THREE.MeshPhongMaterial({overdraw: true, color: 0xFFFFFF, wireframe: true});

  //Geometry to store all buildings of the city
  var cityGeometry = new THREE.Geometry();
  for (var i = 0; i < 600; i++) {
    //Create geometry as a clone
    var building = new THREE.Mesh(geometry.clone());

    //Randomize position and scale of the buildings
    building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.position.y = Math.floor( Math.random() * 600 - 100 ) * 4;
    building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.scale.x  = Math.pow(Math.random(), 2) * 50 + 10;
    building.scale.y  = building.scale.x;
    building.scale.z  = building.scale.x;


    //Merge all buildings to one model - cityGeometry
    THREE.GeometryUtils.merge(cityGeometry, building);
  }

  //Mesh of the city
  var city = new THREE.Mesh(cityGeometry, material);

  //Cast shadows of the models
  city.castShadow = true;
  city.receiveShadow = true;
  scene.add(city);

  //Create the lighting system and add to the scene

  var light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(500, 1500, 1000);
  light.castShadow = true;
  //light.shadowMapWidth = 2048;
  //light.shadowMapHeight = 2048;
  var d = 1000;
  //light.shadowCameraLeft = d;
  //light.shadowCameraRight = -d;
  //light.shadowCameraTop = d;
  //light.shadowCameraBottom = -d;
  //light.shadowCameraFar = 2500;
  scene.add(light);
}
```

* In the following function, it renders each thing.

```JavaScript
// DRAW =========================================================
function draw() {
  renderer.render( scene, camera );
}
```

* In the following function, it makes controls.object.position.y return to 10 when controls.object.position.y is less than (floor.position.y + 10).

```JavaScript
// UPDATE =======================================================
function update(delta) {
  controls.update(delta);
  if(controls.object.position.y < floor.position.y + 10){
      controls.object.position.y = 10;
  }
  //console.log(controls);
}
```

* Run function render

```JavaScript
// RUN ==========================================================
setup();
```

#### This part explains the code used for the **index.html**

* The following code imports **three.min.js** and **index.js** and **FirstPersonControls.js**. For this project, a few dependencies are needed, which can be found in the folder named **libraries**. The **three.min.js** and **FirstPersonControls.js** are found in the **Library**.

```JavaScript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<style>
			body {
				margin: 0;
				overflow: hidden;
			}
		</style>
	</head>
	<body>
		<script src="build/three.min.js"></script>
		<script src="js/FirstPersonControls.js"></script>
		<script src="js/index.js"></script>
	</body>
</html>
```

---

## The final general view of code
  <p align="center">
  <img alt="abramovic" src="assets/object1.jpg" width="420" />
  <img alt="abramovic" src="assets/object2.jpg" width="420" />
  <img alt="abramovic" src="assets/object3.jpg" width="420" />
  <img alt="abramovic" src="assets/object4.jpg" width="420" />
  </p>

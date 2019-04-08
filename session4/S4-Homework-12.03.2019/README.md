# A homework which shows that many cubes with random color are in random rotations in the screen.

## Introduction

The project is a homework which required me to creat a two dimensional grid of objects, and position them accordingly in the scene. Then the homework also required me to make each object be in random rotations and have random color in the scene. All objects are motionless in random rotations in the scene.

---

## Code

#### This part explains the code used for the **index.js**

* The following code defines some global variables

```JavaScript
var renderer, scene, camera;
var controls;
var cubes = [];
```

* The following code creates an empty scene, a perspective camera, a spotLight, a ambLight, a renderer. This renderer configures the color of background and the size of window. The code also creats **controls** to make people could rotate their view by themselves.

```JavaScript
scene = new THREE.Scene();

var W = window.innerWidth,
    H = window.innerHeight;

camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
camera.position.set(10, 20, 85);//could change the camera's rotations
camera.lookAt(scene.position);

var spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(0, 500, 0);
scene.add(spotLight);
//spotLight.castShadow = true;

var ambLight = new THREE.AmbientLight(0xFFFFFF);
ambLight.position.set(0, 500, 0);
ambLight.add(spotLight);
scene.add(ambLight);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor(0x17293a);
renderer.setSize(W, H);
//renderer.shadowMapEnabled = true;

controls = new THREE.OrbitControls(camera, renderer.domElement);
```

* The following code creates a two dimensional grid of objects, and position them accordingly in the scene firstly. Secondly, the code makes each object have random  color. Thirdly, the code creates mesh to combine the objects with materials. Finally, the code defines the position and random rotation of mesh and adds the mesh to scene, meanwhile the code pushes mesh to **cubes**.

```JavaScript
//Create a two dimensional grid of objects, and position them accordingly
for (var x = -47.5; x <= 47.5; x += 5 ) {// Start from -47.5 and sequentially add one every 5 pixels
  for (var y = -47.5; y <= 47.5; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);

    //Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);

    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});

              //The each cube's rotation is random
    					var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    						mesh.position.x = x; //set the mesh
    						mesh.position.y = y; //set the mesh

    						mesh.rotation.x = Math.random() * 5 * Math.PI; //The rotation of x is random
	              mesh.rotation.y = Math.random() * 5 * Math.PI; //The rotation of y is random
    						mesh.rotation.z = Math.random() * 5 * Math.PI; //The rotation of z is random

                //add mesh in the scene
                scene.add( mesh );
                //push mesh in the cubes
                cubes.push(mesh);

}
}

console.log(cubes);

document.body.appendChild(renderer.domElement);
```

* In the loop function, it renders each thing.

```JavaScript
// Run renderer
function drawFrame(){
  requestAnimationFrame(drawFrame);

  renderer.render(scene, camera);
}
```

* Run function render

```JavaScript
init();
drawFrame();
```

#### This part explains the code used for the **index.html**

* The following code imports **three.min.js** and **index.js** and **OrbitControls.js**. For this project, a few dependencies are needed, which can be found in the folder named **libraries**. The **three.min.js** and **OrbitControls.js** are found in the **Library**.

```JavaScript
<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8" />
    <title>Three.js</title>
      <!--  Simple reset to delete the margins  -->
      <style>
        body { margin: 0; }
        canvas { width: 100%; height: 100% }
      </style>
      <!--  Three.js CDN  -->
      <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js"></script>-->
      <script src="build/three.min.js"></script>
      <script src="js/OrbitControls.js"></script>

  </head>
  <body>
    <!--  Our code  -->
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
  </p>

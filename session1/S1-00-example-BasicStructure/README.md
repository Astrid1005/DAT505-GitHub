# An example which shows that a cube rotates in the middle of the screen

## Introduction

The project is an example which is given by the teacher. The example shows a violet cube in the middle of screen whose background color is black. The cube is in a rotating loop. The project is an example of basic geometry.

---

## Code

#### This part explains the code used for the **index.js**

* The following code defines some global variables

```JavaScript
//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
```

* The following function creates an empty scene, a basic perspective camera, a renderer. This renderer configures the color of background and the size of window.

```JavaScript
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
}
```

* This function  creates a cube and basic material firstly. Then the code creates mesh to combines the cube with material. Finally, the code defines the position of the mesh and adds the mesh to scene.

```JavaScript
function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );
}
```

* In the loop function, the code makes the mesh rotate in the loop. Finally, the renderer renders the scene.

```JavaScript
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.01; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};
```

* Adds functions

```JavaScript
init();
geometry();
render();
```

#### This part explains the code used for the **index.html**

* The following code imports **three.js** and **index.js**. For this project, a few dependencies are needed, which can be found in the folder named **libraries**. The **three.js** is found in the **Library**.

```JavaScript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Three.js</title>
      <style>
         body { margin:0;}
         canvas { width: 100%; height: 100%}
       </style>
     <script src="build/three.js"></script>
   </head>
   <body>
     <script src="js/index.js"></script>
   </body>
  </html>
  ```

## The final general view of code
<p align="center">
<img alt="abramovic" src="assets/cube1.jpg" width="420" />
</p>

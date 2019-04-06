# An exercise which was completed by me.

## Introduction

The project is an exercise which requires me to change each cube's material in the scene. I created many diffrent kinds of materials in the following code and changed each cube's material.

---

## Code

#### This part explains the code used for the **index.js**

* The following code creates an empty scene, a basic perspective camera, a renderer. This renderer configures the color of background and the size of window.

```JavaScript
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
renderer.setClearColor("#5A8296");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );
```

* The following function creates light1 and light2, meanwhile it adds light1 and light2 in the scene. Secondly, the function creats one geometry and many different kinds of materials. Then the code creates meshes to combine the geometry with different materials. Finally, the code defines the position of the meshes and adds the meshes to scene.

```JavaScript
// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------
// ------------------------------------------------
// Main Content
// ------------------------------------------------
// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(100, 100, 100);

// MATERIAL 0:
var material0 = new THREE.MeshNormalMaterial();

//MATERIAL 1:
var material1 = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
var material2 = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});

//MATERIAL 3:
var material3 = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 4:
var material4 = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});

//MATERIAL 5:
var material5 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});

//MATERIAL 6:
var material6 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});

//MATERIAL 7:
var material7 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});

//MATERIAL 8:
var material8 = new THREE.PointsMaterial( { color: 0x888888 } );

//MATERIAL 9:
var material9 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } );

//MATERIAL 10:
var material10 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );

//MATERIAL 11:
var material11 =  new THREE.MeshLambertMaterial( { color: 0x666666, emissive: 0xff0000 } );

//MATERIAL 12:
var material12 =  new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true } );

//MATERIAL13:
var material13 =  new THREE.MeshDepthMaterial();

//creat mesh1 to combine geometry with material0
var mesh1 = new THREE.Mesh( geometry, material0 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

//creat mesh2 to combine geometry with material1
var mesh2 = new THREE.Mesh( geometry, material1 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

//creat mesh3 to combine geometry with material2
var mesh3 = new THREE.Mesh( geometry, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

//creat mesh4 to combine geometry with material3
var mesh4 = new THREE.Mesh( geometry, material3 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

//creat mesh5 to combine geometry with material4
var mesh5 = new THREE.Mesh( geometry, material4 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

//creat mesh6 to combine geometry with material5
var mesh6 = new THREE.Mesh( geometry, material5 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

//creat mesh7 to combine geometry with material6
var mesh7 = new THREE.Mesh( geometry, material6 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

//creat mesh8 to combine geometry with material7
var mesh8 = new THREE.Mesh( geometry, material7 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

//creat mesh9 to combine geometry with material8
var mesh9 = new THREE.Mesh( geometry, material8 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

//creat mesh10 to combine geometry with material9
var mesh10 = new THREE.Mesh( geometry, material9 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

//creat mesh11 to combine geometry with material10
var mesh11 = new THREE.Mesh( geometry, material10 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

//creat mesh12 to combine geometry with material11
var mesh12 = new THREE.Mesh( geometry, material11 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;
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
```

* In the loop function, the code makes the meshes rotate in the loop. Finally, the renderer renders the scene.

```JavaScript
var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh1
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh2
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh3
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh4
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh5
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1; //Continuously rotate the mesh6
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh7
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh8
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh9
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh10
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh11
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh12
  mesh12.rotation.y = rot;

  // Render the scene
  renderer.render(scene, camera);
};
```

* Run function render

```JavaScript
render(); //Run the function render
```

#### This part explains the code used for the **index.html**

* The following code imports **three.js** and **index.js**. For this project, a few dependencies are needed, which can be found in the folder named **libraries**. The **three.min.js** is found in the **Library**.

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
<img alt="abramovic" src="assets/cubes1.jpg" width="420" />
<img alt="abramovic" src="assets/cubes2.jpg" width="420" />
</p>

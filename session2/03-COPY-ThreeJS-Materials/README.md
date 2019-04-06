# An exercise which was completed by me.

## Introduction

The project is an exercise which requires me to find an example in [**threejs.org**](https://threejs.org/) and then classify the long code into different files. Meanwhile, the exercise also requires me to find each file which is imported in the **Library**. Finally, the purpose of the exercise is that make sure of taht whether students can run code which is given on the website correctly or not.

I will show the picture and code of example which was found by me on the website in the following words.

---

## Code

#### This part shows the code used for the **index.js**

```JavaScript
if ( WEBGL.isWebGLAvailable() === false ) {
  document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
var wireframe, renderer, scene, camera, camera2, controls;
var wireframe1;
var matLine, matLineBasic, matLineDashed;
var stats;
var gui;
// viewport
var insetWidth;
var insetHeight;
init();
animate();
function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setClearColor( 0x000000, 0.0 );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( - 50, 0, 50 );
  camera2 = new THREE.PerspectiveCamera( 40, 1, 1, 1000 );
  camera2.position.copy( camera.position );
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.minDistance = 10;
  controls.maxDistance = 500;
  // THREE.Wireframe ( WireframeGeometry2, LineMaterial )
  var geo = new THREE.IcosahedronBufferGeometry( 20, 1 );
  var geometry = new THREE.WireframeGeometry2( geo );
  matLine = new THREE.LineMaterial( {
    color: 0x4080ff,
    linewidth: 5, // in pixels
    //resolution:  // to be set by renderer, eventually
    dashed: false
  } );
  wireframe = new THREE.Wireframe( geometry, matLine );
  wireframe.computeLineDistances();
  wireframe.scale.set( 1, 1, 1 );
  scene.add( wireframe );
  // THREE.Line ( WireframeGeometry, LineBasicMaterial ) - rendered with gl.LINE
  geo = new THREE.WireframeGeometry( geo );
  matLineBasic = new THREE.LineBasicMaterial( { color: 0x4080ff } );
  matLineDashed = new THREE.LineDashedMaterial( { scale: 2, dashSize: 1, gapSize: 1 } );
  wireframe1 = new THREE.LineSegments( geo, matLineBasic );
  wireframe1.computeLineDistances();
  wireframe1.visible = false;
  scene.add( wireframe1 );
  //
  window.addEventListener( 'resize', onWindowResize, false );
  onWindowResize();
  stats = new Stats();
  document.body.appendChild( stats.dom );
  initGui();
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  insetWidth = window.innerHeight / 4; // square
  insetHeight = window.innerHeight / 4;
  camera2.aspect = insetWidth / insetHeight;
  camera2.updateProjectionMatrix();
}
function animate() {
  requestAnimationFrame( animate );
  stats.update();
  // main scene
  renderer.setClearColor( 0x000000, 0 );
  renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
  // renderer will set this eventually
  matLine.resolution.set( window.innerWidth, window.innerHeight ); // resolution of the viewport
  renderer.render( scene, camera );
  // inset scene
  renderer.setClearColor( 0x222222, 1 );
  renderer.clearDepth(); // important!
  renderer.setScissorTest( true );
  renderer.setScissor( 20, window.innerHeight - insetHeight - 20, insetWidth, insetHeight );
  renderer.setViewport( 20, window.innerHeight - insetHeight - 20, insetWidth, insetHeight );
  camera2.position.copy( camera.position );
  camera2.quaternion.copy( camera.quaternion );
  // renderer will set this eventually
  matLine.resolution.set( insetWidth, insetHeight ); // resolution of the inset viewport
  renderer.render( scene, camera2 );
  renderer.setScissorTest( false );
}
//
function initGui() {
  gui = new dat.GUI();
  var param = {
    'line type': 0,
    'width (px)': 5,
    'dashed': false,
    'dash scale': 1,
    'dash / gap': 1
  };
  gui.add( param, 'line type', { 'LineGeometry': 0, 'gl.LINE': 1 } ).onChange( function ( val ) {
    switch ( val ) {
      case '0':
        wireframe.visible = true;
        wireframe1.visible = false;
        break;
      case '1':
        wireframe.visible = false;
        wireframe1.visible = true;
        break;
    }
  } );
  gui.add( param, 'width (px)', 1, 10 ).onChange( function ( val ) {
    matLine.linewidth = val;
  } );
  gui.add( param, 'dashed' ).onChange( function ( val ) {
    matLine.dashed = val;
    // dashed is implemented as a defines -- not as a uniform. this could be changed.
    // ... or LineDashedMaterial could be implemented as a separate material
    // temporary hack - renderer should do this eventually
    if ( val ) matLine.defines.USE_DASH = ""; else delete matLine.defines.USE_DASH;
    matLine.needsUpdate = true;
    wireframe1.material = val ? matLineDashed : matLineBasic;
  } );
  gui.add( param, 'dash scale', 1, 8, 0.1 ).onChange( function ( val ) {
    matLine.dashScale = val;
    matLineDashed.scale = val;
  } );
  gui.add( param, 'dash / gap', { '2 : 1': 0, '1 : 1': 1, '1 : 2': 2 } ).onChange( function ( val ) {
    switch ( val ) {
      case '0':
        matLine.dashSize = 2;
        matLine.gapSize = 1;
        matLineDashed.dashSize = 2;
        matLineDashed.gapSize = 1;
        break;
      case '1':
        matLine.dashSize = 1;
        matLine.gapSize = 1;
        matLineDashed.dashSize = 1;
        matLineDashed.gapSize = 1;
        break;
      case '2':
        matLine.dashSize = 1;
        matLine.gapSize = 2;
        matLineDashed.dashSize = 1;
        matLineDashed.gapSize = 2;
        break;
    }
  } );
}
```

#### This part shows the code used for the **index.html**

* The following code imports **three.js**, **index.js**, **OrbitControls.js**, **WebGL.js**, **stats.min.js**, **dat.gui.min.js**, **LineSegmentsGeometry.js**, **LineGeometry.js**, **WireframeGeometry2.js**, **LineMaterial.js**, **LineSegments2.js**, **Line2.js**, **Wireframe.js**. For this project, a few dependencies are needed, which can be found in the folder named **libraries**. The **three.js**, **OrbitControls.js**, **WebGL.js**, **stats.min.js**, **dat.gui.min.js**, **LineSegmentsGeometry.js**, **LineGeometry.js**, **WireframeGeometry2.js**, **LineMaterial.js**, **LineSegments2.js**, **Line2.js**, **Wireframe.js** are found in the **Library**.

```JavaScript
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - lines - fat - wireframe</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>
			body {
				background-color: #000;
				margin: 0px;
				overflow: hidden;
			}
			#info {
				position: absolute;
				color: #ffffff;
				top: 0px;
				width: 100%;
				padding: 5px;
				font-family:Monospace;
				font-size:13px;
				text-align:center;
			}
			a {
				color: #fff;
			}
		</style>
	</head>

	<body>

		<div id="container"></div>

		<div id="info"><a href="https://threejs.org" target="_blank">three.js</a> - fat lines</div>

		<script src="build/three.js"></script>
		<script src="js/controls/OrbitControls.js"></script>

		<script src="js/WebGL.js"></script>

		<script src="js/libs/stats.min.js"></script>
		<script src='js/libs/dat.gui.min.js'></script>

		<script src='js/lines/LineSegmentsGeometry.js'></script>
		<script src='js/lines/LineGeometry.js'></script>
		<script src='js/lines/WireframeGeometry2.js'></script>

		<script src='js/lines/LineMaterial.js'></script>

		<script src='js/lines/LineSegments2.js'></script>
		<script src='js/lines/Line2.js'></script>
		<script src='js/lines/Wireframe.js'></script>

		<script src='js/index.js'></script>

	</body>

</html>
  ```

---

## The final general view of code
<p align="center">
<img alt="abramovic" src="assets/linegeometry.jpg" width="420" />
</p>

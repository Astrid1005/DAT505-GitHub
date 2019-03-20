// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;

var cubesNum = 10;
var cubes = [];
//var eyeRotationX = [];
//var eyeRotationY = [];


var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );

  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}



  //mesh = new THREE.Mesh( geometry, material );
	var eyeGeometry = new THREE.Geometry();
for (var i = 0; i < 5; i++) {
	var mesh = new THREE.Mesh(geometry.clone());
	mesh.position.x = (Math.random() * 100) - 50;
	mesh.position.y = (Math.random() * 100) - 50;
	mesh.position.z = (Math.random() * 100) - 50;

	//var eyeValueX = mouseY/window.innerHeight*2;
	//var eyeValueY = mouseX/window.innerWidth*2;



	mesh.scale.x = Math.random();
	mesh.scale.y = mesh.scale.x;
	mesh.scale.z = mesh.scale.x;

	THREE.GeometryUtils.merge(eyeGeometry, mesh);

	//console.log(mesh.position.x);
	//console.log(mesh.position.y);

}

var eye = new THREE.Mesh(eyeGeometry, material);

   //eyeRotationX.push(eyeValueX);
   //eyeRotationY.push(eyeValueY);

	scene.add( eye );
  cubes.push( eye );


	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );

	render();

}


function render() {
	//console.log(window.innerHeight)


cubes.forEach(function(c, i){
	c.rotation.x = mouseY/window.innerHeight*2;
	c.rotation.y = mouseX/window.innerWidth*2;

	//c.rotation.x = eyeValueX;
	//c.rotation.y = eyeValueY;

	//c.rotation.x = eyeRotationX[i];
	//c.rotation.y = eyeRotationY[i];

	//c.rotation.x = (mouseY+c.position.y)/(window.innerHeight+c.position.y)*2;
	//c.rotation.y = (mouseX+c.position.x)/(window.innerWidth+c.position.x)*2;

	/*if (c.position.y < mouseY){

		c.rotation.x = mouseY/window.innerHeight*2;
		c.rotation.y = mouseX/window.innerWidth*2;

}*/

});

	renderer.render( scene, camera );

//console.log(window.innerHeight);
//console.log(window.innerWidth);

}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

console.log(event.clientX - windowHalfX);
console.log(event.clientY - windowHalfY);

}

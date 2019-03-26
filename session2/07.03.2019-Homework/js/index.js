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
//renderer.setClearColor("#5A8296");
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
//var geometry = new THREE.BoxGeometry(100, 100, 100);
var geometry1 = new THREE.TorusBufferGeometry( 50, 3, 16, 100 );
var geometry2 = new THREE.TorusBufferGeometry( 80, 5, 16, 100 );
var geometry3 = new THREE.TorusBufferGeometry( 120, 5, 16, 100 );
var geometry4 = new THREE.TorusBufferGeometry( 200, 5, 16, 100 );
var geometry5 = new THREE.TorusBufferGeometry( 300, 5, 16, 100 );
var geometry7 = new THREE.BoxGeometry( 30,30, 30 );


// MATERIAL 2:

/*var material2 = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});*/


//
var vertices = [];
				var divisions = 50;
				for ( var i = 0; i <= divisions; i ++ ) {
					var v = ( i / divisions ) * ( Math.PI * 2 );
					var x = Math.sin( v );
					var z = Math.cos( v );
					vertices.push( x, 0, z );
				}
        //
var geometry6 = new THREE.BufferGeometry();
				geometry6.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        //
        for ( var i = 1; i <= 3; i ++ ) {
					var material3 = new THREE.LineBasicMaterial( {
						color: Math.random() * 0xffffff,
						linewidth: 10
					} );
					var line = new THREE.Line( geometry6, material3 );
					line.scale.setScalar( i / 3 );
					scene.add( line );
				}
//MATERIAL 3:
/*var material3 = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );*/
var material3 = new THREE.LineDashedMaterial( {
					color: 'blue',
					linewidth: 1,
					dashSize: 10,
					gapSize: 10
				} );
				var line = new THREE.Line( geometry6, material3 );
				line.scale.setScalar( 280 );
      line.position.z = -1000;
        line.position.y = 0;
				scene.add( line );



//MATERIAL 4:
//var material4 = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 1 (non-shiny material):
var material1 = new THREE.MeshNormalMaterial();


//MATERIAL 5 (shiny material):
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


//MATERIAL 6 (combination of shiny + non-shinny):
var material6 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});



//MATERIAL 7 (physical-based material)
var material7 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});


//MATERIAL 8
/*var material8 = new THREE.LineBasicMaterial( {
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );*/

//MATERIAL 9
/*var material9 = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );*/

//MATERIAL 10
//var material10 = new THREE.PointsMaterial( { color: 0x888888 } );

//MATERIAL 11
//var material11 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } );

//MATERIAL 12
var material12 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );

//MATERIAL13
//var material13 =  new THREE.MeshLambertMaterial( { color: 0x666666, emissive: 0xff0000 } );

//MATERIAL 14
//var material14 =  new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true } );

//MATERIAL 15
var texture = new THREE.TextureLoader().load("texture.jpg");
var material15 = new THREE.MeshBasicMaterial({map : texture});


var mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.z = -1000;
mesh1.position.y = 0;

var mesh2 = new THREE.Mesh( geometry2, material5 );
mesh2.position.z = -1000;
//mesh2.position.x = -100;
mesh2.position.y = 0;

var mesh3 = new THREE.Mesh( geometry3, material7 );
mesh3.position.z = -1000;
//mesh3.position.x = -200;
mesh3.position.y = 0;

var mesh4 = new THREE.Mesh( geometry4, material6 );
mesh4.position.z = -1000;
//mesh4.position.x = 100;
mesh4.position.y = 0;

var mesh5 = new THREE.Mesh( geometry5, material12 );
mesh5.position.z = -1000;
//mesh5.position.x = 200;
mesh5.position.y = 0;

var mesh7 = new THREE.Mesh( geometry7, material15 );
mesh7.position.z = -1000;
mesh7.position.x = 0;
mesh7.position.y = 0;


// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh7 );

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  line.rotation.x = rot-1; //Continuously rotate the mesh
  line.rotation.y = rot-1;

  mesh7.rotation.x = rot+2; //Continuously rotate the mesh
  mesh7.rotation.y = rot+2;

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render

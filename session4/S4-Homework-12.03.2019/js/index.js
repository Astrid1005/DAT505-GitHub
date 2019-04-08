var renderer, scene, camera;
var controls;
var cubes = [];

function init() {

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

  controls = new THREE.OrbitControls(camera, renderer.domElement); //could rotate the view

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

}

// Run renderer
function drawFrame(){
  requestAnimationFrame(drawFrame);

  renderer.render(scene, camera);
}

init();
drawFrame();

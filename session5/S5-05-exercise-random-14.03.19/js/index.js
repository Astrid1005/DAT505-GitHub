var renderer, scene, camera;
var controls;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];

function init() {

  console.log("Init Function Starts");

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
for (var x = -10; x <= 10; x += 5 ) {// Start from -10 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5) {
    var boxGeometry = new THREE.BoxGeometry( 3, 3, 3 );

    //Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);

//make texture load random pictures
    var texture = new THREE.TextureLoader().load("textures/texture" + Math.floor(Math.random()*15) + ".jpg");

//give texture for material
    var boxMaterial = new THREE.MeshBasicMaterial({ map: texture });

              //The mesh's rotation is random
    					var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    						mesh.position.x = x; //set the mesh
    						mesh.position.y = y;//set the mesh
                mesh.scale.y = 1;   //set the scale of mesh

    						mesh.rotation.x = Math.random() * 2 * Math.PI; //The rotation of x is random
                mesh.rotation.y = Math.random() * 2 * Math.PI; //The rotation of y is random
                mesh.rotation.z = Math.random() * 2 * Math.PI; //The rotation of z is random

             var randomValueX = (Math.random() * 0.1) - 0.05; //set a appropriate randomValueX
             var randomValueY = (Math.random() * 0.1) - 0.05; //set a appropriate randomValueY
             randomRotationX.push(randomValueX); //push randomValueX into randomRotationX
             randomRotationY.push(randomValueY); //push randomValueX into randomRotationY

                //add mesh in the scene
    						scene.add( mesh );
                //push mesh in the cubes
                cubes.push(mesh);

}
}

//open Console to see
console.log(cubes);
//console.log(randomRotationX); //show random data
console.log("Init end");
console.log("****** DrawFrame Starts ******");
document.body.appendChild(renderer.domElement);

}

//render loop
function drawFrame(){
  requestAnimationFrame(drawFrame);

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){

    c.rotation.x += randomRotationX[i]; //Roate the object
    c.rotation.y += randomRotationY[i]; //Roate the object

});

  renderer.render(scene, camera);
}

init();
drawFrame();

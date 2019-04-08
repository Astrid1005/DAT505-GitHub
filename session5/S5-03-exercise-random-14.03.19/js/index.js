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
    var boxGeometry = new THREE.TorusBufferGeometry( 80, 3, 20, 100 );

    //Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);

//The color of the material is assigned a random color
var boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFFFF});

//give random color to the special position
if (x==-5 && y==-5){
  boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
} else if (x==5 && y==5){
  boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
} else if (x==-10 && y==-10){
  boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
}
else if (x==0 && y==0){
  boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
}
else if (x==10 && y==10){
  boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
}
else {
  boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFFFF});
}

              //The mesh's rotation is random
    					var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    						mesh.position.x = x; //set the mesh
    						mesh.position.y = y; //set the mesh
                mesh.scale.y = 0.5;  //set the scale of mesh

    						mesh.rotation.x = Math.random() * 2 * Math.PI; //The rotation of x is random
                mesh.rotation.y = Math.random() * 2 * Math.PI; //The rotation of y is random
                mesh.rotation.z = Math.random() * 2 * Math.PI; //The rotation of z is random

             var randomValueX = (Math.random() * 0.1) - 0.05; //set a appropriate randomValueX
             var randomValueY = (Math.random() * 0.1) - 0.05; //set a appropriate randomValueY
             randomRotationX.push(randomValueX); //push randomValueX into randomRotationX
             randomRotationY.push(randomValueY); //push randomValueY into randomRotationY

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

//define scaleCube1, scaleCube2, scaleCube3
var scaleCube1 = -5;
var scaleCube2 = -5;
var scaleCube3 = -5;

//render loop
function drawFrame(){
  requestAnimationFrame(drawFrame);

scaleCube1 += 0.01; // Start from -5 and sequentially plus 0.01 every time
if (scaleCube1 > 3) scaleCube1 = -5;

scaleCube2 += 0.01; // Start from -5 and sequentially plus 0.01 every time
if (scaleCube2 > 3) scaleCube2 = -5;

scaleCube3 += 0.01; // Start from -5 and sequentially plus 0.01 every time
if (scaleCube3 > 3) scaleCube3 = -5;

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){

    c.rotation.x += randomRotationX[i]; //Roate the object
    c.rotation.y += randomRotationY[i]; //Roate the object

    //creat a specified geometry and material
    cubes[12].geometry = new THREE.SphereGeometry( 5, 10, 5 );
    cubes[12].material = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF, wireframe:true});

    c.scale.x = scaleCube1; //give each object scale data
    c.scale.y = scaleCube2; //give each object scale data
    c.scale.z = scaleCube3; //give each object scale data

});

//open Console to see
console.log(scaleCube1)
console.log(scaleCube2)
console.log(scaleCube3)

  renderer.render(scene, camera);
}

init();
drawFrame();

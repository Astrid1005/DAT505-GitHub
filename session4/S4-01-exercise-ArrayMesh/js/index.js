var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

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


//Create a three dimensional grid of objects, and position them accordingly
  for (var x = -10; x < 10; x += 5 ) {// Start from -10 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      for (var z = -10; z < 10; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);

      //Concatenation of the x and y and z values (open Console to see)
      console.log("X:" +x+ ", Y: " +y+ ", Z: " +z);

      //The color of the material is assigned a motionless color
      //The material in different field is assigned different color.
      if ( x >= 0 && y >= 0 && z >=0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x927AC3});
    } // 1 ture  & color
      if ( x < 0 && y >= 0 && z >= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xE28899});
    } //2 ture & color
      if ( x >= 0 && y >= 0 && z < 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8CFA3});
    } //3 ture & color
      if ( x < 0 && y >= 0 && z < 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF3E3D0});
    } //4 ture & color
      if ( x >= 0 && y < 0 && z >= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x70B991});
    } //5 ture & color
      if ( x < 0 && y < 0 && z >= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x53787D});
    }//6 ture & color
      if ( x < 0 && y < 0 && z < 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFCCE77});
    } //7 ture & color
      if ( x >= 0 && y < 0 && z < 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x289B7C});
    }//8 ture & color

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x; //set the mesh
      mesh.position.z = z; //set the mesh
      mesh.position.y = y; //set the mesh
      mesh.scale.y = 1; //can change the scale of mesh in y direction

      //add mesh in the scene
      scene.add(mesh);
      //push mesh in the cubes
      cubes.push(mesh);
  }
}
}

  console.log(cubes);

  document.body.appendChild(renderer.domElement);
}

// Render Loop
function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){
  c.rotation.x = rot; //Roate the object
  c.rotation.y = rot; //Roate the object
  c.scale.x = rot; //make the scale in x direction to be bigger
  c.scale.y = rot; //make the scale in y direction to be bigger
  c.scale.z = rot; //make the scale in z direction to be bigger
  });

  renderer.render(scene, camera);
}

init();
drawFrame();

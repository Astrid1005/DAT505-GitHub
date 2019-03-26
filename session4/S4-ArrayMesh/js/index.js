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

  controls = new THREE.OrbitControls(camera, renderer.domElement);

//This is the original paragraph
  //Create a two dimensional grid of objects, and position them accordingly
  /*for (var x = -47.5; x <= 47.5; x += 5 ) { // Start from -45 and sequentially add one every 5 pixels
    //for (var y = -30; y <= 30; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = 0;
      mesh.scale.y = 0.5;
      scene.add(mesh);
  }*/

  /*for (var x = -47.5; x <= 47.5; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
    for (var y = 0; y <= 15; y += 5) {
      for (var z = 0; z <= 15; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);

//Concatenation of the x and y values (open Console to see)
      console.log("X:" +x+ ", Y: " +y+ ", Z: " +z);

      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = z;
      mesh.position.y = y;
      mesh.scale.y = 0.5;
      scene.add(mesh);
  }
}
}*/

//copy the whole paragraph ,past for three times
  /*for (var x2 = -47.5; x2 <= 47.5; x2 += 5 ) { // Start from -45 and sequentially add one every 5 pixels
    //for (var y = -30; y <= 30; y += 5) {
      var boxGeometry2 = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxMaterial2 = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
      //mesh.castShadow = true;
      mesh2.position.x = x2;
      mesh2.position.z = -6;
      mesh2.position.y = 8;
      mesh2.scale.y = 0.5;
      scene.add(mesh2);
  }*/

  for (var x = -10; x < 10; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      for (var z = -10; z < 10; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);

//Concatenation of the x and y values (open Console to see)
      console.log("X:" +x+ ", Y: " +y+ ", Z: " +z);

      //The color of the material is assigned a random color
//      if ( x >= 0 && y >= 0 && z >=0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x927AC3});
//    } // 1ture  & color
      /*else{
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      }*/
//      if ( x < 0 && y >= 0 && z >= 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xE28899});
//    } //2ture & color
//      if ( x >= 0 && y >= 0 && z < 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8CFA3});
//    } //3ture & color
//      if ( x < 0 && y >= 0 && z < 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF3E3D0});
//    } //4ture & color
//      if ( x >= 0 && y < 0 && z >= 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x70B991});
//    } //5ture & color
//      if ( x < 0 && y < 0 && z >= 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x53787D});
//    }//6ture & color
//      if ( x < 0 && y < 0 && z < 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFCCE77});
//    } //7ture & color
//      if ( x >= 0 && y < 0 && z < 0 ){
//      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x289B7C});
//    }//8ture & color

    //The color of the material is assigned a random color
    //The order is important.
    if ( x >= 0 && y >= 0 && z >=0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0x927AC3});
  } // 1ture  & color
    /*else{
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    }*/
  else  if ( x <= 0 && y >= 0 && z >= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0xE28899});
  } //2ture & color
  else  if ( x >= 0 && y <= 0 && z >= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8CFA3});
  } //3ture & color
  else  if ( x <= 0 && y <= 0 && z >= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0xF3E3D0});
  } //4ture & color
  else  if ( x >= 0 && y >= 0 && z <= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0x70B991});
  } //5ture & color
  else  if ( x <= 0 && y >= 0 && z <= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0x53787D});
  }//6ture & color
  else  if ( x >= 0 && y <= 0 && z <= 0 ){
     boxMaterial = new THREE.MeshLambertMaterial({color: 0xFCCE77});
  } //7ture & color
  else  {
     boxMaterial = new THREE.MeshLambertMaterial({color: 0x289B7C});
  }//8ture & color

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = z;
      mesh.position.y = y;
      mesh.scale.y = 1;
      scene.add(mesh);
      cubes.push(mesh);
  }
}
}

console.log(cubes);

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

rot += 0.01;

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){
    c.rotation.x = rot; //Roate the object that is reference...
    c.rotation.y = rot;
    c.scale = rot;

    //another kind of rotation
    /*c.rotation.x = rot; //Roate the object that is reference...
    c.rotation.y = rot;
    c.scale.x = rot;
    c.scale.y = rot;
    c.scale.z = rot;*/

  });

  renderer.render(scene, camera);
}

init();
drawFrame();

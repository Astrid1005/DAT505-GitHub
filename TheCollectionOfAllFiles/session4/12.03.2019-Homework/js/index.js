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



  /*for (var x = -47.5; x <= 47.5; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
    for (var y = -47.5; y <= 47.5; y += 5) {
      //for (var z = 0; z <= 15; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);

//Concatenation of the x and y values (open Console to see)
      //console.log("X:" +x+ ", Y: " +y+ ", Z: " +z);

      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      //mesh.position.z = z;
      mesh.position.y = y;
      mesh.scale.y = 1;
      scene.add(mesh);
      cubes.push(mesh);
  }
}*/
//}

for (var x = -47.5; x <= 47.5; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
  for (var y = -47.5; y <= 47.5; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
//Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);
    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});

//The each cube's rotation is random
//i < 1 is the key, but i do not know why
//for ( var i = 0; i < 1; i ++ ) {
    					var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    						mesh.position.x = x;
    						mesh.position.y = y;

    						//mesh.position.z = z;

    						mesh.rotation.x = Math.random() * 5 ;//* Math.PI;

    						mesh.rotation.y = Math.random() * 5 ;//* Math.PI;

    						//mesh.scale.x = mesh.scale.y = Math.random() * 50 + 100;

    						//mesh.matrixAutoUpdate = false;

    						mesh.updateMatrix();
    						scene.add( mesh );
                cubes.push(mesh);
    					//}

}
}

console.log(cubes);

document.body.appendChild(renderer.domElement);


}

function drawFrame(){
  requestAnimationFrame(drawFrame);
//for ( var i = 0; i < 1; i ++ ) {

 rot += Math.random() * 0.05 * Math.PI;
  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){



    //must relieve only one of the following rotation of x or y or z
    //if relieve more than one rotation, the cubes won't rotate in random rotations
    //c.rotation.x = rot; //Roate the object that is reference...
    //c.rotation.y = rot;
    c.rotation.z =  rot;
    c.scale = rot;

    //another kind of rotation
    /*c.rotation.x = rot; //Roate the object that is reference...
    c.rotation.y = rot;
//the scale will become bigger in x or y or z
    c.scale.x = rot;
    c.scale.y = rot;
    c.scale.z = rot;*/


});
//}
  renderer.render(scene, camera);
}

init();
drawFrame();

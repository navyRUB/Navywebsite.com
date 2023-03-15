// Set up the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Create the Lorenz attractor
var rho = 28, sigma = 10, beta = 8/3;
var x = 1, y = 1, z = 1;
var points = [];
for (var i = 0; i < 10000; i++) {
  var dx = sigma * (y - x);
  var dy = x * (rho - z) - y;
  var dz = x * y - beta * z;
  x += 0.01 * dx;
  y += 0.01 * dy;
  z += 0.01 * dz;
  points.push(new THREE.Vector3(x, y, z));
}

// Create the lines for the attractor
var geometry = new THREE.BufferGeometry().setFromPoints(points);
var material = new THREE.LineBasicMaterial({ color: 0xffffff });
var attractor = new THREE.Line(geometry, material);

// Add the attractor to the scene
scene.add(attractor);

// Render the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
		camera.position.z = 20;
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth,window.innerHeight);
		document.body.appendChild(renderer.domElement);
			var geometry = new THREE.BoxGeometry(2,10,2);
			var geocirce = new THREE.SphereGeometry(2,8,8);
			var material = new THREE.MeshNormalMaterial();
			var lambert = new THREE.MeshBasicMaterial({color:0xffff00});
			var cube = new THREE.Mesh(geometry, material);
			var cuboid = new THREE.Mesh(geometry,lambert);
			var sphere = new THREE.Mesh(geocirce,material);
			sphere.position.set(5,5,2);
			cuboid.position.set(-5,-5,2);
			var animate = function (){
				requestAnimationFrame(animate);
				cube.rotation.x += 0.05;
				cube.rotation.y += 0.05;
				cuboid.rotation.z +=0.05;
				cuboid.rotation.y +=0.05;
				sphere.rotation.z +=0.09;
				sphere.rotation.x +=0.09;
				renderer.render(scene,camera);
			}
			animate();
			scene.add(cube,cuboid,sphere);
		renderer.render(scene,camera);
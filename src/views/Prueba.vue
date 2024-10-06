<template>
  <div ref="solarSystemContainer" style="width: 100%; height: 100vh;"></div>
</template>

<script>
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'PruebaS',
  mounted() {
    this.initSolarSystem();
  },
  methods: {
    initSolarSystem() {
      // 1. Crear la escena
      const scene = new THREE.Scene();

      // 2. Crear la cámara
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10; // Ajustar la posición de la cámara

      // 3. Crear el renderizador
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.solarSystemContainer.appendChild(renderer.domElement);



      
      // // 4. Crear el sol
      const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
      // const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
      // const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      // scene.add(sun); // Añadir el sol a la escena
      // 4. Crear la textura para el sol
      const textureLoader = new TextureLoader();
      const sunTexture = textureLoader.load(require('@/assets/sol.jpg')); // Cambia esta ruta a la ubicación de tu textura

      // Crear el sol con textura
      const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun); // Añadir el sol a la escena



      // 5. Crear la luz
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 0); // Luz en la posición del sol
      scene.add(light);


      // 6. Crear el planeta (Mercurio)
      const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
      const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
      scene.add(mercury); // Añadir Mercurio a la escena

      // 7. Crear la órbita de Mercurio
      const orbitRadius = 3.9; // Distancia del planeta al sol
      const orbitGeometry = new THREE.CircleGeometry(orbitRadius, 64);
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2; // Alinear la órbita en el plano XY
      scene.add(orbit); // Añadir la órbita a la escena

      // 8. Control de órbita
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;

      // 9. Función de animación
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotar el sol
        sun.rotation.y += 0.01;

        // Actualizar la posición de Mercurio
        const time = Date.now() * 0.001; // Obtener el tiempo actual
        mercury.position.x = orbitRadius * Math.cos(time); // Posición en el eje X
        mercury.position.z = orbitRadius * Math.sin(time); // Posición en el eje Z

        // Renderizar la escena
        renderer.render(scene, camera);
      };

      animate();

      // Ajustar el tamaño al redimensionar la ventana
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
  }
};
</script>

<style scoped>
/* Añadir estilos personalizados si es necesario */
</style>

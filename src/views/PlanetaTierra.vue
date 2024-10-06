<template>
    <div ref="earthContainer" style="width: 100%; height: 100vh;"></div>

</template>
  
  <script>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
  export default {
    name: 'PlanetaTierra',
    mounted() {
      this.initEarth();
    },
    methods: {
      initEarth() {
        // 1. Crear la escena
        const scene = new THREE.Scene();
  
        // 2. Crear la cámara
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3; // Posicionamos la cámara
  
        // 3. Crear el renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.earthContainer.appendChild(renderer.domElement);
  
        // 4. Cargar la textura del mapa de la Tierra y el mapa de relieve
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg');
        const displacementMap = textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/c/c3/Earth_relief_location_map.jpg'); // Mapa de relieve
  
        // 5. Crear la esfera (planeta)
        const geometry = new THREE.SphereGeometry(1, 64, 64); // Incrementamos la calidad a 64x64
  
        // 6. Aplicar la textura y el mapa de desplazamiento (relieve)
        const material = new THREE.MeshPhongMaterial({
          map: earthTexture, // Textura del mapa
          displacementMap: displacementMap, // Mapa de relieve
          displacementScale: 0.1, // Escala del relieve (ajusta según el efecto deseado)
        });
  
        // 7. Añadir luces para que se vean las sombras y el relieve
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);
  
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
  
        // 8. Configurar los controles de órbita (OrbitControls)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true;
        controls.zoomSpeed = 0.5;
        controls.enablePan = false;
  
        // 9. Función de animación
        const animate = () => {
          requestAnimationFrame(animate);
  
          // Rotar la Tierra lentamente
          earth.rotation.y += 0.001;
  
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
  
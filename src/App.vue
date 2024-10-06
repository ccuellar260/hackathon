<template>
  <div id="app" class=" h-screen w-screen relative overflow-hidden">
   
    <video v-if="isSinfonia == true" class=" absolute top-0 left-0 w-full h-full object-cover" 
      autoplay loop muted playsinline>
        <source src="./assets/universo_video.mp4" type="video/mp4">
        Tu navegador no soporta el elemento video.
    </video>
   
   
    <!-- navbar -->
    <nav   class="relative z-10 bg-opacity-40 bg-white">
      <div :class="[ 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        isSinfonia() ? 'text-white ' : ' border-b  border-gray-100', 
      ]">

        <div class="flex justify-between h-12">
          <div class="flex space-x-6 font-semibold">

            <router-link to="/SinfoniaS" active-class="border-b-4 border-green-600 "
              class="flex items-center justify-center  text-sm font-semibold mr-32  ">
              <!-- <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" class="h-8 w-auto"> -->
              Dashboard
            </router-link>

            <router-link to="/PlanetaTierra" active-class="border-b-4 border-green-600 "
             class="flex items-center justify-center  text-sm font-semibold ">
               Planeta Tierra 3D 
            </router-link>

            <router-link to="/Prueba" active-class="border-b-4 border-green-600 "
             class="flex items-center justify-center  text-sm font-semibold ">
                Juego
            </router-link>


       

          </div>

          <div class="flex space-x-4">
            <router-link to="/Video/create" active-class="border-b-4 border-green-600 "
             class="flex items-center justify-center  text-sm font-semibold mr-8 ">
               Subir Video
            </router-link>

            <router-link to="/#" class="leading-tight flex flex-col items-center justify-center  text-sm font-semibold ">
              <span> Cristian Cuellar </span>
              <span class="text-xs font-normal"> Administrador</span>
            </router-link>


          </div>

        </div>

      </div>

    </nav>

    <div class="pt-8 relative z-10 ">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </div>





  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    //es ruta sinfonia 
    isSinfonia(){
      console.log(this.$route.path);
      const ruta = this.$route.path === '/SinfoniaS';
      console.log('ruta',ruta);

      
      return ruta; 
    }
  }
}
</script>
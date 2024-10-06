<template>

    <div class="flex flex-col ">

      <div class="h-12  ">


        <ul class="flex flex-wrap text-sm font-medium text-center text-white  dark:text-gray-400">
          <li class="me-2">
            <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">
              Collages Creados
            </a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 ">
              Collages Aleatorias
            </a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 ">
              Collages Personalizadas
            </a>
          </li>


        </ul>

      </div>
      <div class="bg-white bg-opacity-40 p-5 mt-2 h-full  ">


        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <div class="bg-red-300">
            <!-- <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""> -->
            <!-- <video class="rounded-lg shadow-lg w-auto h-full object-cover" autoplay loop muted controls>
              <source src="../assets/universo_video.mp4" type="video/mp4">
              Tu navegador no soporta el elemento video.
            </video> -->

          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
          </div>


        </div>


      </div>
    </div>




</template>

<script src="../controllers/SinfoniaS.js"></script>

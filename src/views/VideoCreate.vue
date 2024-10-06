<template>

        <div class=" text-gray-900 z-30">

          

        <div class="max-w-sm mx-auto">
          <div class="mb-5">
            <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Titulo
            </label>
            <input type="text" id="nombre"  v-model="title"
             class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Nombre" required />
          </div>

                              
          <div class="max-w-sm mx-auto">
            <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              descripcion
            </label>
            <textarea id="descripcion" rows="4" v-model="description" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>

          <div class="max-w-lg mx-auto">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">
              Subit I
                       </label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            aria-describedby="user_avatar_help" id="user_avatar" type="file" >
     
          </div>


              
          <div class="max-w-lg mx-auto">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">
              Subit Video 
                       </label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            aria-describedby="user_avatar_help" id="user_avatar" type="file" >
     
          </div>

 
          <button type="submit" class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register new account
          </button>
        </div>




       
        </div>
</template>


<script>

export default {
  name: 'VideoCreate',
  data() {
    return {
        title: '',
        description: '',
        file: '',
    };
  },

};

</script>
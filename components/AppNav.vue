<template>
  <div class="flex pb-3 bg-teal-500 dark:bg-teal-900 
    sm:bg-transparent sm:ml-16
    p-2 items-center 
  ">
    <div class="block sm:hidden group mb-0 sm:mb-11 text-center 
      text-3xl hover:text-green cursor-pointer
      font-semibold mr-2
      dark:text-teal-400
      "
    >
      <fa :icon="['fab', 'google']"/>
    </div>
    <div class="flex flex-shrink">
      <input 
        type="text"
        placeholder="Search Here"
        class="form-input h-10
          text-sm focus:border-2 
          focus:border-teal-500
          rounded-tl-md rounded-bl-md
          shadow-sm
          border-0 search
        "
      >
      <div class="bg-teal-800 sm:bg-teal-600 
        dark:bg-teal-600
        p-2 z-2 rounded-tr-md
        cursor-pointer shadow-sm 
        rounded-br-md w-10 text-center">
        <fa class="text-white text-md" icon="search" />
      </div>
    </div>
    <div class="ml-auto flex space-x-3">
      <div class="rounded-full text-center 
        p-1 h-8 w-8 bg-gray-200
      ">
        <fa class="text-gray-600" icon="bell" />
      </div>
      <div class="rounded-full text-center p-1 h-8 w-8 
        bg-teal-800 dark:bg-teal-600 sm:bg-teal-600
      ">
        <fa class="text-white" icon="user" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.search {
  width: 40vw;
  max-width: 400px;
}
</style>
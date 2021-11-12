<template>
  <div class="bg-white mx-auto
    p-2 sm:p-4 shadow-md rounded-xl 
    dark:text-white dark:bg-gray-800"
  >
    <BreadCrumb/>
    <h1 class="mb-4 font-bold text-center sm:text-left">Stats</h1>
    <div class="grid grid-cols-2 gap-2 sm:gap-4 p-1">
      <div v-for="items in [0,1,2,3]" :key="items"
        class="rounded-md bg-gray-100 p-2 sm:p-4 flex flex-col
        items-center sm:space-x-3.5 sm:flex-row
        dark:bg-gray-600 
        " 
        >
          <div class="bg-blue-600 h-12 w-12 p-2 rounded-full
          text-white text-xl text-center
          ">
            <fa icon="wallet"/>
          </div>
          <div class="text-center sm:text-left mt-2 sm:mt-0">
            <p class="font-bold text-xl">432562</p>
            <p class="text-gray-400">Last Balance</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

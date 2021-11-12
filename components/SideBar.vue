<template>
  <div class="fixed bg-teal-500 p-2
    w-screen bottom-0 
    sm:p-4
    sm:h-screen sm:w-16
    hover:min-w-content
    dark:bg-teal-900
    "
  >
    <div class="flex
      sm:flex-col sm:mt-2
      sm:items-center justify-around text-xl
      sm:gap-6
      text-teal-100 dark:text-teal-300
      items-center
     "
     >
       <div class="hidden sm:block group mb-0 sm:mb-11 text-center 
         text-3xl hover:text-green cursor-pointer
         font-semibold
         dark:text-teal-400
         "
       >
         <fa :icon="['fab', 'google']"/>
       </div>
        <div 
          v-for="item in navItems"
          :key="item.icon"
          class="py-2 sm:py-2 bg-teal-600 rounded-xl 
            text-center w-11 hover:rounded-3xl
            transition-all duration-900
            ease-linear cursor-pointer
            relative group dark:bg-black
            dark:hover:bg-teal-700
            hover:text-black
        ">
          <fa class="hover:animate-pulse" :icon="['fas', item.icon]"/>
          <span class="absolute bg-teal-800 -left-1  
            bottom-12 sm:bottom-2 sm:left-12 
            px-2 py-1 text-sm rounded-md
            transition-all duration-100 scale-0
            group-hover:scale-100 group-hover:text-teal-300
          ">
            {{ item.name }}
          </span>
        </div>
        <div class="bottom-16 sm:absolute">
          <fa class="cursor-pointer" :icon="['fas', 'sign-out-alt']"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Home', icon: 'home'},
        { name: 'Wallet', icon: 'wallet'},
        { name: 'Payment', icon: 'shield-alt'},
        { name: 'Invoice', icon: 'file-invoice'},
        { name: 'Settings', icon: 'cogs'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
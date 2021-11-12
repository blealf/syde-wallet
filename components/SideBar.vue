<template>
  <div 
    class="fixed bg-teal-500 
      p-2 w-screen bottom-0 
      sm:w-16 sm:p-4 sm:pt-0
      sm:h-screen 
      hover:min-w-content
      dark:bg-gray-800
    "
  >
    <div 
      class="flex items-center 
        justify-around text-xl 
        text-teal-100
        sm:flex-col sm:gap-6 sm:mt-2
        dark:text-teal-300
      "
     >
     <!-- Main icon -->
       <nuxt-link 
         to="/"
         class="hidden group mb-0 
           cursor-pointer text-center 
           text-3xl font-semibold
           sm:block sm:mb-11
           hover:text-green
           dark:text-teal-400
         "
       >
         <fa :icon="['fab', 'google']"/>
       </nuxt-link>
       <!-- nav items -->
        <div 
          v-for="item in navItems"
          :key="item.icon"
          class="relative py-2 rounded-xl group
            w-11 text-center cursor-pointer
            transition-all duration-900
            ease-linear 
            sm:py-2
            hover:rounded-3xl
            hover:text-black
            dark:hover:bg-teal-700
        ">
          <fa class="hover:animate-pulse" :icon="['fas', item.icon]"/>
          <span 
            class="absolute -left-1  
              bottom-12 rounded-md
              bg-teal-800 px-2 py-1 text-sm 
              transition-all duration-100 scale-0
              sm:bottom-2 sm:left-12
              group-hover:scale-100 
              group-hover:text-teal-300
            "
          >
            {{ item.name }}
          </span>
        </div>
        <!-- Log out -->
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
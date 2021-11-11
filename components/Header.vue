<template>
  <div class="fixed h-screen min-w-5
    bg-teal-500 p-4 hover:min-w-content
    dark:bg-teal-900
    "
  >
    <div class="group mb-11 text-center 
      text-4xl hover:text-green cursor-pointer
      font-semibold
      dark:text-teal-400
      "
    >
      <fa :icon="['fab', 'google']"/>
    </div>
    <div class="mt-20 flex flex-col 
      items-center space-y-8 text-xl 
      text-teal-100 dark:text-teal-300
     "
     >
        <div 
          v-for="item in navItems"
          :key="item.icon"
          class="py-3 bg-teal-600 rounded-xl 
            text-center w-12 hover:rounded-3xl
             transition-all duration-900
            ease-linear cursor-pointer
            relative group dark:bg-black
            dark:hover:bg-teal-700
            hover:text-black
        ">
          <fa class="hover:animate-pulse" :icon="['fas', item.icon]"/>
          <span class="absolute left-14 bg-teal-800
            px-2 py-1 text-sm rounded-md bottom-3
            transition-all duration-100 scale-0
            group-hover:scale-100 group-hover:text-teal-300
          ">
            {{ item.name }}
          </span>
        </div>
        <div class="absolute bottom-5">
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
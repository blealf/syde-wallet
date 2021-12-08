<template>
  <div 
    class="pb-3 bg-white
      p-2 items-center
      sm:ml-16
      dark:bg-gray-800
    "
  >
  <!-- Just a wrapper -->
    <div 
      class="
        flex max-w-md mx-auto sm:max-w-none
      "
    >
      <!-- Logo on sm -->
      <nuxt-link 
        to="/"
        class="block mt-1 group 
          mb-0 mr-2 cursor-pointer 
          text-center text-3xl
          font-semibold
          sm:hidden sm:mb-11
          hover:text-green
          dark:text-teal-400
        "
      >
        <fa :icon="['fab', 'google']"/>
      </nuxt-link>
      <!-- Search -->
      <div class="flex flex-shrink">
        <input 
          type="text"
          placeholder="Search Here"
          class="form-input h-10
            text-sm rounded-tl-md 
            rounded-bl-md
            shadow-sm border-0 
            focus:border-2 
            focus:border-teal-500
            search
          "
        >
        <div 
          class="bg-teal-800 
            p-2 z-2 rounded-tr-md
            cursor-pointer shadow-sm 
            rounded-br-md w-10 text-center
            sm:bg-teal-600 
            dark:bg-teal-600
          "
        >
          <fa class="text-white text-md" icon="search" />
        </div>
      </div>
      <!-- Icons -->
      <div class="ml-auto flex space-x-1 sm:space-x-3">
        <!-- Notificaion -->
        <button 
          class="rounded-full 
            p-1 h-8 w-8 bg-gray-200
            text-center 
            cursor-pointer
        "
        @click="$emit('change-theme')"
        >
        <fa class="text-gray-600" icon="adjust" />
      </button>
        <!-- Theme changer -->
        <div class="rounded-full text-center 
          p-1 h-8 w-8 bg-gray-200
        ">
          <fa class="text-gray-600" icon="bell" />
        </div>
        <!-- Account -->
        <div 
          class="rounded-full
           text-center cursor-pointer
           bg-teal-800 p-1 h-8 w-8 
           sm:bg-teal-600
           dark:bg-teal-700
         "
         @click="showAccount = !showAccount"
        >
          <fa class="text-white" icon="user" />
        </div>
      </div>
    </div>
    <!-- Account dropdown -->
    <div 
      v-show="showAccount"
      class="absolute right-5 
        top-16 rounded-md
        bg-white shadow-2xl
        transition-all duration-300
        ease-in-out
        dark:bg-gray-600
      "
    >
      <div class="flex gap-2 px-4 py-3 pr-7 border-b border-gray-300">
        <div class="rounded-full text-center p-1 h-8 w-8 
          bg-teal-800 dark:bg-teal-600 sm:bg-teal-600
        ">
          <fa class="text-white" icon="user" />
        </div>
        <div class="text-left text-teal-800 dark:text-teal-400">
          <p class="text-sm font-semibold">Blessing Alfred</p>
          <p 
            class="text-xs text-gray-500 dark:text-teal-400"
          >blessing@alfred.name</p>
        </div>
      </div>
      <!-- Account items -->
      <div 
        v-for="item in accountItems"
        :key="item.name"
        class="flex gap-2 py-3 px-4 
          text-teal-800 text-sm
          border-b border-gray-300
          cursor-pointer
          hover:text-white hover:bg-teal-800
          dark:text-teal-400
          dark:hover:text-gray-200
        "
      >
         <fa class="" :icon="item.icon" />
         <p class="-mt-1">{{ item.name }}</p>
      </div>
      <!-- Sign out -->
      <div 
        class="flex gap-2 p-3 
          text-red-500 text-sm
          cursor-pointer
          hover:text-white hover:bg-red-500
        "
      >
         <fa class="" icon="sign-out-alt" />
         <p class="-mt-1">Logout</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const showAccount = ref(false)
    const accountItems = ref(
      [
        { name: 'Profile', icon: 'user' },
        { name: 'Balance', icon: 'wallet' },
        { name: 'Settings', icon: 'cogs' },
        { name: 'Activity', icon: 'clock' },
        { name: 'Lock', icon: 'lock' }
      ]
    )
    return {
      showAccount,
      accountItems,
    }
  }
}
</script>

<style scoped>
.search {
  width: 35vw;
  max-width: 400px;
}
</style>
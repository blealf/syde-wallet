<template>
  <div :class="{ dark: dark }">
    <div class="wrapper bg-gray-100 dark:bg-gray-600
      min-h-screen
    ">
      <SideBar />
      <AppNav @change-theme="dark = !dark" />
      <div class="ml-1 p-2 sm:ml-16">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    }
  },
}
</script>

<style lang="css" scoped>
.wrapper {
  
}
</style>
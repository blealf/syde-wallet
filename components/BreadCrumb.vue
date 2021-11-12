<template>
  <div class="text-teal-600 dark6text-teal-400 text-opacity-70">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link 
      v-for="item in crumbs"
      :key="item" 
      :to="item"
    >
      <fa class="mx-3" icon="chevron-right" />
      {{ item ? item : null }}
  </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      return this.$route.path.split('/').splice(1)
    }
  },
 mounted() {
   console.log(this.crumbs)
 }
}
</script>

<style scoped>

</style>
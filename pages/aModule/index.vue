<template>
  <div>是啊啊啊</div>
</template>

<script>
    export default {
        name: "index",
      mounted() {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        })
      }
    }
</script>

<style scoped>

</style>

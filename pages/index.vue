<template>
  <section :class="[$style.container,$style.subtitle,$style.melli]" >
    <div>
      <sj-logo></sj-logo>
      <h1 :class="$style.title">
        <el-button>sssssssss</el-button>
      </h1>
      <h2 :class="$style.subtitle">
        My Jarl Nuxt.js project
      </h2>
      <div :class="$style.links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          :class="$style['button--green']">Documentation</a>
      </div>
      <a href="#">xxxxxxxxxxxxxxxxxxxx</a>
    </div>
  </section>
</template>

<script>
 import a from '~/core/api'
 import {mapActions} from 'vuex'

export default {
  /*components: {
    Logo
  },*/
  loading: {
    color: 'blue',
    height: '10px',
    top: '10px'
  },
  methods: {
    ...mapActions('aModule',['actionTest'])
  },
  mounted () {
    console.log('a')
    this.actionTest()
    this.$api.core.login()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  }
}
</script>

<style lang="scss" module>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $warning-color;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <main class="pd-100">
    <b-container>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/" class="btn btn-danger">
        Home page
      </NuxtLink>
    </b-container>
  </main>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.container {
  flex-direction: column;
  text-align: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
h1 {
  font-size: 20px;
}
</style>

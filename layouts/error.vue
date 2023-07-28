<template>
  <v-app>
    <v-row class="fill-height align-center justify-center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>There was an error</h1>
        <v-btn class="mt-4" to="/"> Go to home page </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;

    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 36px;
  text-align: center;
}
</style>

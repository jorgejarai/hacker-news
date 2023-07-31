<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <NuxtLink
          class="text--primary text-decoration-none"
          :to="localePath('/')"
          >{{ $t('global.title') }}</NuxtLink
        >
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

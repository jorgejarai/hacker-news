<template>
  <v-row v-if="loading" style="height: 100vh" justify="center" align="center">
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
      width="6"
    ></v-progress-circular>
  </v-row>
  <v-row v-else justify="center" align="center">
    <v-col v-if="!error">
      <v-row v-for="article in articles" :key="article.id" align="center">
        <NewsArticle
          :title="article.title"
          :author="article.author"
          :story-url="article.storyUrl"
          :created-at="article.createdAt"
        />
      </v-row>
    </v-col>
    <v-col v-else>
      <v-alert type="error">Error fetching articles</v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
      loading: true,
      error: false,
    };
  },
  mounted() {
    this.fetchPage();
  },
  methods: {
    async fetchPage() {
      try {
        const res = await fetch('http://localhost:3000/api/stories');
        const response = await res.json();

        this.articles = response.hits;
        this.loading = false;
      } catch (err) {
        this.error = true;
        this.loading = false;
      }
    },
  },
};
</script>

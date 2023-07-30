<template>
  <v-container>
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
        <v-row justify="center">
          <v-switch
            v-model="showNoUrlStories"
            label="Show stories with no URL"
          ></v-switch>
        </v-row>
        <v-row v-for="article in articles" :key="article.id" justify="center">
          <NewsArticle
            :title="article.title"
            :author="article.author"
            :story-url="article.storyUrl"
            :created-at="article.createdAt"
            :comment-text="article.commentText"
            :tags="article.tags"
          />
        </v-row>
        <v-row justify="center">
          <v-pagination
            v-model="page"
            :length="pageCount"
            total-visible="8"
            class="ma-4"
          ></v-pagination>
        </v-row>
      </v-col>
      <v-col v-else>
        <v-alert type="error">Error fetching articles</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
      loading: true,
      error: false,
      page: 1,
      pageCount: 0,
      showNoUrlStories: false,
    };
  },
  watch: {
    page() {
      this.loading = true;
      this.fetchPage();
    },
    showNoUrlStories() {
      this.loading = true;
      this.fetchPage();
    },
  },
  mounted() {
    this.fetchPage();
  },
  methods: {
    async fetchPage() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/stories?page=${
            this.page - 1
          }&showNoUrlStories=${this.showNoUrlStories}`,
        );
        const response = await res.json();

        this.articles = response.hits;
        this.pageCount = response.pageCount;
        this.loading = false;
      } catch (err) {
        this.error = true;
        this.loading = false;
      }
    },
  },
};
</script>

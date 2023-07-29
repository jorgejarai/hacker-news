<template>
  <v-card elevation="4" class="mx-4 my-4" style="width: 100%; max-width: 600px">
    <v-card-text>
      <span class="text-h5 text--primary">
        {{ title }}
      </span>
      <p>By {{ author }} - {{ timeSinceCreation }}</p>
      <p v-if="!!storyUrl">
        Link: <a :href="storyUrl">{{ storyUrl }}</a>
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="accent-4" @click="reveal = true">Learn More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import timeDifference from '../lib/timeDifference';

export default {
  props: {
    title: String,
    author: String,
    storyUrl: String,
    createdAt: String,
  },
  computed: {
    timeSinceCreation() {
      return timeDifference(new Date(this.createdAt));
    },
  },
  data() {
    return {
      reveal: false,
    };
  },
};
</script>

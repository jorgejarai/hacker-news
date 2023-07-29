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
      <v-dialog v-model="reveal" width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain color="accent-4" v-bind="attrs" v-on="on">
            Learn more
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5">
            {{ title }}
          </v-card-title>

          <v-card-text>
            <p>By {{ author }} - {{ timeSinceCreation }}</p>
            <v-chip class="mr-2" v-for="tag in tags" :key="tag">{{
              tag
            }}</v-chip>
            <p class="mt-4" v-html="commentText"></p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="reveal = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    commentText: String,
    tags: Array,
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

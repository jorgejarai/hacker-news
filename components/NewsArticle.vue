<template>
  <v-card elevation="4" class="ma-4" style="width: 100%; max-width: 600px">
    <v-card-text>
      <span v-if="!!title" class="text-h5 text--primary">
        {{ title }}
      </span>
      <span v-else class="text-h5 text--primary">{{
        $t('index.article-card.no-title')
      }}</span>

      <p v-if="!!author">
        {{ $t('index.article-card.author-text', { author }) }} -
        <span :title="$d(new Date(createdAt), 'long')">{{
          $t('index.article-card.time-text', {
            time: timeSinceCreation,
          })
        }}</span>
      </p>
      <p v-else>
        {{
          $t('index.article-card.author-text', {
            author: $t('index.article-card.no-author'),
          })
        }}
        -
        <span :title="$d(new Date(createdAt), 'long')">{{
          $t('index.article-card.time-text', {
            time: timeSinceCreation,
          })
        }}</span>
      </p>

      <p v-if="!!storyUrl">
        Link: <a :href="storyUrl">{{ storyUrl }}</a>
      </p>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="reveal" width="600">
        <template #activator="{ on, attrs }">
          <v-btn text color="primary" v-bind="attrs" v-on="on">
            {{ $t('index.article-card.learn-more') }}
          </v-btn>
        </template>

        <v-card>
          <v-card-title v-if="!!title" class="text-h5">
            {{ title }}
          </v-card-title>
          <v-card-title v-else class="text-h5">{{
            $t('index.article-card.no-title')
          }}</v-card-title>

          <v-card-text>
            <p v-if="!!author">
              {{ $t('index.article-card.author-text', { author }) }} -
              <span :title="$d(new Date(createdAt), 'long')">{{
                $t('index.article-card.time-text', {
                  time: timeSinceCreation,
                })
              }}</span>
            </p>
            <p v-else>
              {{
                $t('index.article-card.author-text', {
                  author: $t('index.article-card.no-author'),
                })
              }}
              -
              <span :title="$d(new Date(createdAt), 'long')">{{
                $t('index.article-card.time-text', {
                  time: timeSinceCreation,
                })
              }}</span>
            </p>

            <v-chip v-for="tag in tags" :key="tag" class="mr-2">{{
              tag
            }}</v-chip>

            <p v-if="!!commentText" class="mt-4" v-html="commentText"></p>
            <p v-else class="mt-4">{{ $t('index.article-card.no-comment') }}</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="storyUrl" color="primary" text @click="goToStoryUrl">{{
              $t('index.article-card.visit-page')
            }}</v-btn>
            <v-btn color="primary" text @click="reveal = false">
              {{ $t('index.article-card.ok') }}</v-btn
            >
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
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    storyUrl: {
      type: String,
      default: '#',
    },
    createdAt: {
      type: String,
      default: '1970-01-01T00:00:00.000Z',
    },
    commentText: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reveal: false,
    };
  },
  computed: {
    timeSinceCreation() {
      return timeDifference(new Date(this.createdAt));
    },
    prettyCreatedAt() {
      return new Date(this.createdAt).toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
      });
    },
  },
  methods: {
    goToStoryUrl() {
      window.open(this.storyUrl, '_blank');
    },
  },
};
</script>

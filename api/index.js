const express = require('express');

const fetchArticles = require('../lib/fetchArticles');

const app = express();

// Ping endpoint
app.get('/ping', (_req, res) => {
  res.json({
    message: 'Pong!',
  });
});

/* Fetch stories from the Hacker News API
 *  Query params:
 *    - page: The page number to fetch (defaults to 0).
 *    - showNoUrlStories: Whether to filter out stories with no URL (defaults to true).
 *    - hitsPerPage: The number of hits per page (defaults to 20)
 */
app.get('/stories', async (req, res) => {
  const page = parseInt(req.query.page, 10) || 0;
  const showNoUrlStories = !!req.query.showNoUrlStories;
  const hitsPerPage = parseInt(req.query.hitsPerPage, 10) || 20;

  const articles = await fetchArticles({
    page,
    filterNoUrlStories: !showNoUrlStories,
    hitsPerPage,
  });

  res.json(articles);
});

module.exports = { path: '/api', handler: app };

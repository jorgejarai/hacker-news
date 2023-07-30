const express = require('express');
const Joi = require('joi');

const fetchArticles = require('./fetchArticles');

const app = express();

// Ping endpoint
app.get('/ping', (_req, res) => {
  res.json({
    message: 'Pong!',
  });
});

const querySchema = Joi.object({
  page: Joi.number().integer().min(0).default(0),
  showNoUrlStories: Joi.boolean().default(true),
  hitsPerPage: Joi.number().integer().min(1).default(20),
});

/* Fetch stories from the Hacker News API Query params:
 *    - page (int): The page number to fetch (defaults to 0).
 *    - showNoUrlStories (boolean): Whether to filter out stories with no URL
 *      (defaults to true).
 *    - hitsPerPage (int): The number of hits per page (defaults to 20)
 */
app.get('/stories', async (req, res) => {
  const {
    error,
    value: { page, showNoUrlStories, hitsPerPage },
  } = querySchema.validate(req.query, {
    stripUnknown: true,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }

  const articles = await fetchArticles({
    page,
    filterNoUrlStories: !showNoUrlStories,
    hitsPerPage,
  });

  if (!articles) {
    return res.status(500).json({
      success: false,
      error: 'Could not fetch articles',
    });
  }

  res.json({
    success: true,
    ...articles,
  });
});

module.exports = { path: '/api', handler: app };

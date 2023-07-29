const fetch = require('node-fetch');

const API_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=coding';

/**
 * Fetches articles from the API.
 *
 * @async
 * @function
 * @param {Object} options - The options for fetching articles.
 * @param {number} [options.page=0] - The page number to fetch.
 * @param {boolean} [options.filterNoUrlStories=true] - Whether to filter out articles with no URL.
 * @param {number} [options.hitsPerPage=20] - The number of hits per page.
 * @returns {Promise<Object>} The fetched articles and whether there is a next page.
 */
const fetchArticles = async (options) => {
  const { page = 0, filterNoUrlStories = true, hitsPerPage = 20 } = options;

  try {
    const res = await fetch(
      `${API_URL}&page=${page}&hitsPerPage=${hitsPerPage}`,
    );
    const data = await res.json();

    const isNextPage = data.nbPages > page + 1;

    let hits = data.hits;

    if (filterNoUrlStories) {
      hits = hits.filter((hit) => !!hit.story_url);
    }

    hits = hits.map((hit) => ({
      title: hit.story_title,
      author: hit.author,
      createdAt: hit.created_at,
      storyUrl: hit.story_url,
      commentText: hit.comment_text,
      tags: hit._tags,
    }));

    return {
      success: true,
      hits,
      isNextPage,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch articles',
    };
  }
};

module.exports = fetchArticles;

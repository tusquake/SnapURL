const express = require('express');
const {
    handleCreateShortUrl,
    handleRedirectUrl,
    handleGetAllUrls,
    handleGetUrlAnalytics,
    handleDeleteUrl
} = require('../controllers/url');
const router = express.Router();

// Create short URL
router.post('/', handleCreateShortUrl);

// Get all URLs with basic info
router.get('/', handleGetAllUrls);

// Redirect to original URL
router.get('/:shortId', handleRedirectUrl);

// Get analytics for a specific URL
router.get('/:shortId/analytics', handleGetUrlAnalytics);

// Delete a URL
router.delete('/:shortId', handleDeleteUrl);

module.exports = router;
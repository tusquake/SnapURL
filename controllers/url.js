const { nanoid } = require('nanoid');
const Url = require('../models/url');

async function handleCreateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' });
    const shortId = nanoid(8);
    await Url.create({ shortId: shortId, redirectUrl: body.url, visitHistory: [] });
    return res.json({ id: shortId });
}

async function handleRedirectUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findByShortId(shortId);

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    // Update visit history
    await Url.updateVisitHistory(shortId, Date.now());

    // Redirect to the original URL
    return res.redirect(entry.redirectUrl);
}

async function handleGetAllUrls(req, res) {
    try {
        const urls = await Url.getAll();
        return res.json({
            count: urls.length,
            urls: urls.map(url => ({
                shortId: url.shortId,
                redirectUrl: url.redirectUrl,
                visitCount: url.visitHistory.length,
                createdAt: url.createdAt,
                lastVisited: url.visitHistory.length > 0 ?
                    new Date(Math.max(...url.visitHistory.map(v => v.timestamp))) : null
            }))
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch URLs' });
    }
}

async function handleGetUrlAnalytics(req, res) {
    const shortId = req.params.shortId;

    try {
        const entry = await Url.findByShortId(shortId);

        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        const analytics = {
            shortId: entry.shortId,
            redirectUrl: entry.redirectUrl,
            totalVisits: entry.visitHistory.length,
            createdAt: entry.createdAt,
            lastVisited: entry.visitHistory.length > 0 ?
                new Date(Math.max(...entry.visitHistory.map(v => v.timestamp))) : null,
            visitHistory: entry.visitHistory.map(visit => ({
                timestamp: visit.timestamp,
                date: new Date(visit.timestamp).toISOString()
            })).sort((a, b) => b.timestamp - a.timestamp)
        };

        return res.json(analytics);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch analytics' });
    }
}

async function handleDeleteUrl(req, res) {
    const shortId = req.params.shortId;

    try {
        const result = await Url.deleteByShortId(shortId);

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        return res.json({ message: 'URL deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete URL' });
    }
}

module.exports = {
    handleCreateShortUrl,
    handleRedirectUrl,
    handleGetAllUrls,
    handleGetUrlAnalytics,
    handleDeleteUrl
}
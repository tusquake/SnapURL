const { getDB } = require('../connect');

class Url {
    constructor() {
        this.collection = 'urls';
    }

    async create(data) {
        const db = getDB();
        const collection = db.collection(this.collection);

        const urlData = {
            shortId: data.shortId,
            redirectUrl: data.redirectUrl,
            visitHistory: data.visitHistory || [],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(urlData);
        return { ...urlData, _id: result.insertedId };
    }

    async findByShortId(shortId) {
        const db = getDB();
        const collection = db.collection(this.collection);
        return await collection.findOne({ shortId });
    }

    async findByRedirectUrl(redirectUrl) {
        const db = getDB();
        const collection = db.collection(this.collection);
        return await collection.findOne({ redirectUrl });
    }

    async updateVisitHistory(shortId, timestamp) {
        const db = getDB();
        const collection = db.collection(this.collection);

        return await collection.updateOne(
            { shortId },
            {
                $push: { visitHistory: { timestamp } },
                $set: { updatedAt: new Date() }
            }
        );
    }

    async getAll() {
        const db = getDB();
        const collection = db.collection(this.collection);
        return await collection.find({}).toArray();
    }

    async deleteByShortId(shortId) {
        const db = getDB();
        const collection = db.collection(this.collection);
        return await collection.deleteOne({ shortId });
    }
}

module.exports = new Url();
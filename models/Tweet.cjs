/* eslint-disable no-undef */
const mongoose = require('mongoose')



const tweetSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        firstName: String,
        lastName: String,
        likes: { type: Number, default: 0 },
        sponsored: { type: Boolean, default: false },
    },
    {timestamps: true}
);

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
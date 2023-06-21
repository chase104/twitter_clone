/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
require('./config/database.cjs')

const { createTweet, getTweets, updateTweet, deleteTweet } = require('./controllers/tweets.cjs')

const app = express();
app.use(express.json());

// CRUD - Create, Read, Update, Delete

// C
app.post('/tweets', createTweet)

// R
app.get('/tweets', getTweets)

// U send ID in params. Send update stuff in req.body
app.put('/tweets/:tweetId/:newTitle', updateTweet)

// D
app.delete('/tweets/:tweetId', deleteTweet)


app.listen(4002, () => {
    console.log("listening on 4002")
})

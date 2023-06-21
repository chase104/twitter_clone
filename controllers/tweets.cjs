
const Tweet = require('../models/Tweet.cjs')


const createTweet = async (req, res) => {
    let response = await Tweet.create(req.body);
    if (response) {
        res.json(response)
    } else {
        res.status(400).json("creation falied!")
    }
}

const getTweets = async (req, res) => {
    // make a request to databse, get a response (an array of objects)
    let response = await Tweet.find();
    res.json(response)
}

const updateTweet = async (req, res) => {
    // get the document from mongo
    // make changes HERE in the function
    // use the .save() method
    let objectFromDatabase = await Tweet.findById(req.params.tweetId);
    objectFromDatabase.title = req.params.newTitle;
    objectFromDatabase.save();
    res.send({
        message: "updated document",
        document: objectFromDatabase
    })
};

const deleteTweet = async (req, res) => {
   console.log("route hit");
    let response = await Tweet.findByIdAndDelete(req.params.tweetId);
    res.send(response)
}

module.exports = {
    createTweet,
    getTweets,
    updateTweet,
    deleteTweet
}
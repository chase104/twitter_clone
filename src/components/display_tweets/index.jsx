import axios from "axios"
import { useState } from 'react'
import Tweet from '../tweet'

const DiplayTweets = ({tweets, setTweets}) => {

  // get the lengh of the tweets array and put that many empty strings in inputValues State
  // maka tweet component with it's own state
  // put an inputValue property on each tweet 

    // 1st render:      []
    // after useEffect:  [{_id: 123, title: park day}, {_id: 1234, title: park!}]
    const tweetsJSX = tweets.map((obj) => {
        return (
          <Tweet obj={obj} key={obj._id} tweets={tweets} setTweets={setTweets} />
        )
    })



    
  return (
    <div>{tweetsJSX}</div>
  )
}

export default DiplayTweets
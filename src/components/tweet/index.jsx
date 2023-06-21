import  { useState } from 'react';
import axios from 'axios';

const Tweet = ({obj, tweets, setTweets}) => {
    const [inputValue, setInputValue] = useState('');
    const handleClick = (id) => {
        axios({
          method: "DELETE",
          url: `/tweets/${id}`
        }).then((response) => {
          console.log(response);
          if (response.status === 200) {
            // we deleted in DB
            // now delete from state
            // newTweets [{_id: 123, title: park}, ]
            // tweets = [{_id: 123, title: park}, {_id: 1234, title: swimming day!}]
            let newTweets = tweets.filter((obj) => {
              // with filter
              // if I return true, the obj (tweet) goes into newTweets
              // if I return false, the obj does not go
              if (obj._id === id) {
                return false;
              } else {
                return true;
              }
            })
            // newTweets has all tweets except the clicked tweet
            setTweets(newTweets);
          }
        })
    }
    
    const handleUpdate = async (clickedId) => {
        setInputValue("")
        // make axios request to server
        // server will make change to database
        // we get response (change made in database)
        // change state HERE on the frontend.


        let response = await axios({
            method: "PUT",
            url: `/tweets/${clickedId}/${inputValue}`
        })

        console.log(response);
        let updatedTweet = response.data.document;
        let newTweetsState = tweets.map((obj) => {
            if (obj._id !== updatedTweet._id) {
                return obj
            } else {
                return updatedTweet
            }
        })
        setTweets(newTweetsState);
    }

  return (
    <div style={{border: "4px solid black", padding: "10px"}}>
            <div>{obj.title}</div>
            <div>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
              <button onClick={() => handleUpdate(obj._id)} >Update this Tweet</button>
            </div>
            <button onClick={() => handleClick(obj._id)}>Delete This Tweet!</button>
    </div>
  )
}

export default Tweet
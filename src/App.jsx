import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form'
import DisplayTweets from './components/display_tweets'
import axios from 'axios'

function App() {

  const [tweets, setTweets] = useState([]);
  
    // useEffect, go and get tweets, then setTweets
    useEffect(() => {
      axios("/tweets").then((res) => {
        let arrayFromCollection = res.data;
        // res.status res.something res.data
        // now we have array  of tweets from database
        console.log(res);
        setTweets(arrayFromCollection)
      })
    }, []);

  return (
    <>
    <h1>My Twitter Clone</h1>
  {/* create data  DONE*/}
    <Form   tweets={tweets} setTweets={setTweets}  />
    <DisplayTweets tweets={tweets} setTweets={setTweets} />
  {/* read data */}
  {/* update data */}
  {/* delete data */}
    </>
  )
}

export default App

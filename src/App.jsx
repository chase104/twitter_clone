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
        console.log(res);
        setTweets(res.data)
      })
    }, []);

  return (
    <>
    <h1>My Twitter Clone</h1>
  {/* create data  DONE*/}
    <Form   tweets={tweets} setTweets={setTweets}  />
    <DisplayTweets tweets={tweets} />
  {/* read data */}
  {/* update data */}
  {/* delete data */}
    </>
  )
}

export default App

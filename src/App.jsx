import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import DisplayTweets from './components/display_tweets';
import axios from 'axios';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';

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

    const Home = () => {
      return (
        <>
          <Form   tweets={tweets} setTweets={setTweets}  />
          <DisplayTweets tweets={tweets} setTweets={setTweets} />
        </>
      )
    }

  return (
    <>
    <h1>My Twitter Clone</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">SignUp</Link>
    </nav>
    {/* PAGES HERE */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
    </>
  )
}

export default App

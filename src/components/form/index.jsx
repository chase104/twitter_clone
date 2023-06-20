import axios from 'axios';
import { useState } from 'react';

const Form = ({tweets, setTweets}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // send data to server (POST - /tweets) axios
    axios({
      method: "POST",
      url: "/tweets",
      data: {
        title,
        body,
        firstName,
        lastName
      }
    }).then((result) => {

      console.log(result);
      setTweets([...tweets, result.data])
    })
    // Reset the form fields
    setTitle('');
    setBody('');
    setFirstName('');
    setLastName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

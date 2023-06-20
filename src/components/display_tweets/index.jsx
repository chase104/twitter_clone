
const DiplayTweets = ({tweets}) => {


    const tweetsJSX = tweets.map((obj) => {
        return <div key={obj._id}>{obj.title}</div>
    })
  return (
    <div>{tweetsJSX}</div>
  )
}

export default DiplayTweets
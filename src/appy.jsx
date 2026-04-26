import {useState} from 'react'
import CommentItem from './components/CommentItem'

import './App.css'

const initialCommentsList = [
  {
    uniqueNo: 1,
    name: 'Rahul',
    commentText: 'The ending is so good!',
  },
  {
    uniqueNo: 2,
    name: 'Floyd Miles',
    commentText: 'The attention to detail in the animation is amazing!',
  },
  {
    uniqueNo: 3,
    name: 'Jacob',
    commentText: 'The storytelling is fantastic, simple yet impactful!',
  },
  {
    uniqueNo: 4,
    name: 'Devon Lane',
    commentText: 'The soundtrack perfectly complements the animation!',
  },
]

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState(initialCommentsList)
  const [name,setName]=useState('')
  const onChangeSearchInput = event => setSearchInput(event.target.value)

  const deleteComment = uniqueNo => {
    const filteredComments = commentsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    setCommentsList(filteredComments)
  }

  const searchResults = commentsList.filter(eachComment =>
    eachComment.name.includes(searchInput),
  )
  const onChangeName=event =>{
    setName(event.target.value)
  }
  const onChangeCommentText=event =>{
    setCommentText(event.target.value)
  }
  const onAddComment = event =>{
    event.preventDefault()
    const newComment = {
      uniqueNo : commentsList.length+1,
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  
   setName("")
   setCommentText("")
  }
  console.log(commentsList)
  
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-elements-container">
          <img
            src="https://assets.ccbp.in/frontend/hooks/nxt-player-logo-img.png"
            alt="nxt player logo"
            className="logo"
          />
        </div>
      </div>
      <div className="video-player-container">
        <video
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/static-website/big_buck_bunny_crujfx.mp4"
          controls
          width="100%"
          className="video-player"
        />
        <h1 className="video-title">Big Buck Bunny</h1>
        <p className="video-stats">8,100,195 views - May 29, 2008</p>
        <hr className="horizontal-line" />
      </div>
      <div className="comments-container">
        <div className="comments-header">
          <p className="comments-title">Comments</p>
          <input
            type="search"
            className="search-input"
            placeholder="Search comments..."
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </div>
        <form className="form" onSubmit={onAddComment}>
          <input type="text" className="name-input" placeholder="Your name" value={name} onChange={onChangeName}/>
          <textarea
            className="comment-text-input"
            placeholder="Your comment"
            rows="6"
            onChange={onChangeCommentText}
            value ={commentText}
          />
          <button type="submit" className="comment-button">
            Comment
          </button>
        </form>
        <ul className="comments-list">
          {searchResults.map(eachComment => (
            <CommentItem
              key={eachComment.uniqueNo}
              commentDetails={eachComment}
              deleteComment={deleteComment}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

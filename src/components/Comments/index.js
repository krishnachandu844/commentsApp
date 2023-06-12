import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const intialCommentsList = []

// Write your code here
class Comments extends Component {
  state = {}
  render() {
    return (
      <div className="bg-container">
        <div className="comments-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="para-1">Say something about 4.0 Technologies</p>
            <form className="add-comment-container">
              <input type="text" placeholder="Your Name" className="input" />
              <textarea
                placeholder="Your Comment"
                className="textArea"
                rows="6"
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="comment-co">
          <p>
            <span className="Comments-count">0</span>Comments
          </p>
        </div>
        <ul className="comments-container"></ul>
      </div>
    )
  }
}
export default Comments

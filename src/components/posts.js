import React from "react"
import "./posts.css"

const Posts = ({ title, image, time, content }) => {
  return (
    <article>
      <div className="title">
        <img src={image} />
        <h2>{title}</h2>
        <time>{time}</time>
      </div>
      <div className="description">{content}</div>
      <div className="read-more">
        <button>Keep Reading</button>
      </div>
    </article>
  )
}

export default Posts

import React from "react"
import "./posts.css"

const Posts = ({ title, image, time, content }) => {
  return (
    <article>
      <div className="title">
        <div>
          <img src={image} />
        </div>
        <div className="title__info">
          <h2>{title}</h2>
          <time>{time}</time>
        </div>
      </div>
      <div className="description">{content}</div>
      <div className="read-more">
        <button>Keep Reading &rarr;</button>
      </div>
    </article>
  )
}

export default Posts

import React from "react";

import Comment from "../Comment";
import "./App.css";

export default function Post({ data }) {
  return (
    <div className="post">
      <header>
        <img src={data.author.avatar} width="100" height="100" />
        <div>
          <strong>{data.author.name}</strong>
          <small>{data.date}</small>
        </div>
      </header>

      <p>{data.content}</p>

      {data.comments.map(comment => (
        <Comment key={String(comment.id)} data={comment} />
      ))}
    </div>
  );
}

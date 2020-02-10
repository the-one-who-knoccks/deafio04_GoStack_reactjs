import React from "react";

import "./App.css";

export default function Comment({ data }) {
  console.log(data);
  return (
    <div className="comment">
      <img src={data.author.avatar} />
      <p>
        <strong>{data.author.name}</strong>
        {data.content}
      </p>
    </div>
  );
}

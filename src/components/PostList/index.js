import React, { Component } from "react";

import Post from "../Post";
import "./App.css";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Thiago Alves",
          avatar: "https://api.adorable.io/avatars/67/Thiago_Alves.png"
        },
        data: "09 Feb 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/67/Diego_Fernandes.png"
            },
            content:
            "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp. Incluse 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord(Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://api.adorable.io/avatars/67/Gabriel.png"
        },
        data: "10 Feb 2020",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack e estou achando muito massa! Na opnião de vocês, qual a melhor stack de desenvolvimento no mercado?",
        comments: [
          {
            id: 1,
            author: { 
              name: "Ana Beatriz",
              avatar: "https://api.adorable.io/avatars/67/Ana.png"
            },
            content: "Olá, Gabril! Que bacana, também estou fazendo o Bootcamp e estou amando. E a melhor stack, sem duvidas é a do Nodejs, Reactjs e React-native! rsrs"
          },
          {
            id: 2,
            author: {
              name: "Rui Abreu",
              avatar: "https://api.adorable.io/avatars/67/Rui_.png"
            },
            content: "Concordo com a Ana, essa Stack é a melhor!"
          }
        ]
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="content"> 
        {posts.map(post => (
          <Post data={post} key={String(post.id)} />
        ))}
      </div>
    );
  }
}


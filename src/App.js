import "./styles.css";
import React, { useState } from "react";

const foodDictionary = {
  Rajasthani: [
    {
      title: "Aloo paratha",
      description:
        "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Aloo_Paratha1.jpg",
      rating: "5/10"
    },
    {
      title: "Kachori",
      description:
        "Kachori is a spicy deep-fried snack, originating from the Indian subcontinent, and common in places with Indian diaspora and other South Asian diaspora.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dal_ki_kachoriyan.jpg/250px-Dal_ki_kachoriyan.jpg",
      rating: "6/10"
    },
    {
      title: "Laal maans",
      description:
        "It is a mutton curry prepared in a sauce of yoghurt and hot spices such as red Mathania chillies.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Laal-Maans.jpg",
      rating: "9/10"
    }
  ],
  Karnataka: [
    {
      title: "Dosa",
      description:
        "A dosa is a thin pancake or crepe, originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg/220px-Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg",
      rating: "6/10"
    },
    {
      title: "Indian filter coffee",
      description:
        "Indian filter coffee is a coffee drink made by mixing frothed and boiled milk with the infusion obtained by percolation brewing of finely ground coffee powder in a traditional Indian filter.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Filter_kaapi.JPG/220px-Filter_kaapi.JPG",
      rating: "9/10"
    },
    {
      title: "Uttapam",
      description:
        "Unlike a typical dosa, which is crisp and crepe-like, uttapam is thicker, with toppings.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mini_Uttappam.jpg/250px-Mini_Uttappam.jpg",
      rating: "4/10"
    }
  ],
  Odia: [
    {
      title: "Dahibara Aludam",
      description:
        "The dish is prepared by soaking vadas (fried flour balls) in light dahi (yogurt) water. Then adding AluDum (potato curry) and ghuguni (pea curry) to it.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dahibara_Aludam.jpg/250px-Dahibara_Aludam.jpg",
      rating: "8/10"
    },
    {
      title: "Podo pitha",
      description:
        "Poda pitha is slow-cooked pitha. It is made by slowly baking fermented rice, black gram, grated coconut and jaggery overnight.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Raja_Janta_poda_pitha.jpg/220px-Raja_Janta_poda_pitha.jpg",
      rating: "6/10"
    },
    {
      title: "Chhena poda",
      description:
        "Chhena poda is a cheese dessert from the Indian state of Odisha. It is made of well-kneaded homemade fresh cheese chhena, sugar is baked for several hours until it browns.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/250px-Chennapoda.jpg",
      rating: "7/10"
    }
  ]
};

var foodCategory = Object.keys(foodDictionary);

export default function App() {
  const [food, setFood] = useState("Rajasthani");

  function clickHandler(cuisine) {
    setFood(cuisine);
  }

  return (
    <div className="App">
      <h1>Best Indian Cuisines</h1>
      <h4>
        Checkout the recommendations by me. Select a cuisine to get started.
      </h4>
      {foodCategory.map((cuisine) => {
        return (
          <button onClick={() => clickHandler(cuisine)} key={cuisine}>
            {cuisine}
          </button>
        );
      })}
      <hr />
      {foodDictionary[food].map((item) => {
        return (
          <li key={item}>
            <img alt="food image" src={item.image} />
            <div className="content">
              <h3>{item.title}</h3>
              <p>Rating: {item.rating}</p>
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

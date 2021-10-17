import React, { useState, useEffect } from "react";
import "../App.css";
import ItemCard from "./ItemCard";
import Pokedex from "pokedex-promise-v2";
const P = new Pokedex(); 

const Shop = (props) => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [items, setItems] = useState([]);

  const fetchPokemon = async () => {
    const pokemons = await P.getPokemonsList({ limit: 20 });
    const pokemonsList = await pokemons.results;
    const urls = pokemonsList.map((p) => p.url);
    P.resource(urls).then(function (response) {
      setItems(response);
    });
  };

  const itemCards = items.map((item) => (
    <ItemCard key={item.id} item={item} handleCartAdd={props.handleCartAdd} />
  ));

  return <div className={"shop-container"}>{itemCards}</div>;
};

export default Shop;
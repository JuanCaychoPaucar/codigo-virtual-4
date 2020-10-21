// importamos axios
import axios from "axios";

// const axios = require("axios");

const saludar = () => {
  console.log("Bienvenidos a NODEJS y Nodemon!!!");
  axios.get("https://pokeapi.co/api/v2/type/1/").then((data) => {
    console.log(data);
  });
};

saludar();

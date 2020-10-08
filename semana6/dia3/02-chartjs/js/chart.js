/**
 * getContext("2d")
 * sirve para dibujar en una etiqueta canvas
 */

// contexto
var ctx = document.getElementById("myChart").getContext("2d");

// objeto Chart
var chart = new Chart(ctx, {
  // The type of chart we want to create
  //   type: "line", // LINEAL
  type: "bar", // BARRAS

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // EJE X
    datasets: [ // EJE Y
      {
        label: "Pedidos",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Cancelaciones",
        backgroundColor: "rgb(98, 155, 221)",
        borderColor: "rgb(72, 120, 175)",
        data: [15, 20, 50, 80, 0, 3, 10],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

let url = "https://fakestoreapi.com/products"


fetch(url)
  .then(res => res.json())
  .then((data) => {
    let output = "";
    data.forEach(element => {
      
        output += `<div id="card">
        <img id="cardImg" src="${element.image}" alt="err">
        <h1 id="desc">${element.category}</h1>
        <h2 id="price">Rs. ${element.price}</h2>
        <h5 id="const">free delivery</h5>
        <h3 id="rating">${element.rating.rate} *</h3>
    </div>`;
      })
      document.getElementById("cards").innerHTML = output;
      
    });

    
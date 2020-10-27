$(function () {
  function getContent() {
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://rapidapi.p.rapidapi.com/parser?ingr=apple",
      method: "GET",
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "bcb43ea212msh0a318e5386e5229p1f0083jsn781cae2c94d9",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      for (let index = 0; index < response.hints.length; index++) {
        document.getElementById("list").innerHTML += `<img src="${response.hints[index].food.image}" class="img-fluid" />`;
      }
    });
  }

  getContent();
});

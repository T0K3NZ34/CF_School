const products = [
    {
      name: "Red Chair",
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg",
      likes: 0,
    },
    {
      name: "Modern Lamp",
      price: 89.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/13/56/light-1853025_1280.jpg",
      likes: 0,
    },
    {
      name: "Wooden Table",
      price: 129.99,
      image:
        "https://cdn.pixabay.com/photo/2022/03/02/10/58/flowers-7042890_1280.jpg",
      likes: 0,
    },
    {
      name: "Office Chair",
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2020/05/12/12/05/office-5162607_1280.jpg",
      likes: 0,
    },
    {
      name: "Wall Clock",
      price: 39.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/09/30/clock-1868724_1280.jpg",
      likes: 0,
    },
  ];
  const productsContainer = document.getElementById("products");
  function showCards() {
    for (let item of products) {
      productsContainer.innerHTML += `
          <div>
              <div class="card my-4">
                  <img src="${item.image}" class="card-img-top" alt="${item.name}" style='height:250px'>
                  <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.price}€</p>
                      <p class="p-2">Likes: <span class='likesNum'>${item.likes}</span></p>
                      <button class="btn btn-primary likeBtns">Like</button>
                  </div>
              </div>
          </div>
      `;
    }
  }
  showCards();
  function increaseLikes() {
    let likeBtns = document.querySelectorAll(".likeBtns");
  
    likeBtns.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        if (products[index].likes < 10) {
          products[index].likes++;
          document.querySelectorAll(".likesNum")[index].innerText =
            products[index].likes;
        }
        if (products[index].likes === 10) {
          btn.disabled = true;
          btn.textContent = "Max Likes Reached";
        }
      });
    });
  }
  increaseLikes();
  
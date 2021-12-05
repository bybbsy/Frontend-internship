<template>
  <div class="product-block">
      <div class="product-wrapper">
          <h5 class="wrapper-info">Product information</h5>
          <router-link :to="{ name: 'products' }" class="link__go-back">Go back</router-link>
          <div class="product-info">

              <div class="product-title">{{ title }}</div>
              <div class="product-pic">
                  <img :src="url" alt="">
              </div>

              <div class="product-desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed minus in ut facere cupiditate, dolor perferendis fugiat velit nesciunt. Repellat, hic quis nobis minus ipsam quam aut fugit vel!
                  Optio animi corporis placeat. Obcaecati at minima, voluptas cum est iusto aliquam aspernatur harum perspiciatis aut, qui iure ab suscipit tenetur! Saepe provident eaque voluptas enim cupiditate ut et deleniti.
                  Quaerat tempore asperiores voluptates sit dolore fugit illo! Aliquam, quisquam ipsa, molestiae quibusdam dolorum, labore officiis quaerat perspiciatis consequatur necessitatibus harum minus vel natus at assumenda recusandae incidunt maxime eum.</p>
              </div>

              <div class="buttons">
                  <button type="button">Add to wishlist</button>
                  <button type="button">Purchase</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: null,
            url: null
        }
    },
    beforeCreate() {
        return fetch(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`)
          .then(response => response.json())
          .then(json => {
              this.title = json.title
              this.url = json.url
          })
    }
}
</script>

<style>
.product-block {
    min-height: 100%;
}

.wrapper-info {
    font-size: 1.2em;
    text-align: center;
    margin: 5px 0;
}

.product-info {
    display: grid; 
    margin: 0 25px;
    grid-auto-columns: minmax(350px, 450px) 1fr;
    grid-auto-rows: 50px minmax(250px, 300px) minmax(150px, 200px);
    background-color: rgba(255, 255, 255, 0.842);
    border-radius: 15px;
    gap: 10px;
}

.link__go-back {
    display: inline-flex;
    font-size: 1.1em;
    background-color: tomato;
    border-radius: 2px;
    color: #fff;
    line-height: 1.1em;
    padding: 2px 3px;
    margin: 5px 0 5px 15px;
}

.product-title {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
}

.product-pic {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
}

.product-pic img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-desc {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    overflow-y: auto;
    font-size: 1.1em;
    margin-left: 5px;
    margin-bottom: 5px;
}

.buttons {
    display: flex;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    justify-content: flex-end;
    align-items: flex-start;
}

.buttons button {
    margin: 0 15px;
    background-color: tomato;
    outline: none;
    font-size: 1.1em;
    color: #fff;
    border: unset;
    cursor: pointer;
}

.buttons button:hover {
    box-shadow: 0px 0px 100px 100px rgba(17, 17, 17, 0.205) inset;;
}

@media screen and (max-width: 660px) {
    .product-info {
        grid-auto-columns: minmax(150px, 200px) 1fr;
        grid-auto-rows: 50px minmax(150px, 200px) minmax(100px, 150px);
    }

    .product-title {
        grid-column: 1 / 3;
    }

    .product-desc {
        font-size: 0.9em;
    }

    .buttons {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
        justify-content: space-around;
    }
}

@media screen and (max-width: 400px) {
    .product-info {
        gap: 5px;
        grid-auto-columns: minmax(70px, 120px) 1fr;
        grid-auto-rows: 50px minmax(250px, 300px) minmax(70px, 100px);
    }
}
</style>
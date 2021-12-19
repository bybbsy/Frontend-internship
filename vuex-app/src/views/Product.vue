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
    <TheAccordion>
      <template v-slot:accordion-title>
        <span class="accordion-title">Specifications</span>
      </template>
      <template v-slot:content>
        <div class="accordion-content">
          <ul>
            <li>Spec 1</li>
            <li>Spec 2</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptatibus sapiente, quibusdam iure eligendi rem eveniet velit vitae tenetur natus? Tempora animi sed qui aperiam doloremque, sit quas pariatur ab!
              Molestias quo ab ratione, facere nesciunt suscipit laborum vero eius labore nobis pariatur at officiis veritatis recusandae quisquam rem? Mollitia delectus ipsam minima earum suscipit incidunt, ab error beatae doloribus.
              Culpa veritatis corrupti quisquam enim exercitationem vitae reiciendis quos aspernatur perspiciatis quo nesciunt et voluptatem expedita itaque eius placeat at mollitia, tempora repudiandae alias quae. Ut amet nisi perspiciatis ipsum.
              Distinctio sequi similique eum excepturi, asperiores illo voluptates culpa consequatur aspernatur placeat eveniet quibusdam ipsam necessitatibus? Aut, doloribus. Porro maxime veniam necessitatibus voluptatibus assumenda nihil quaerat possimus officia ipsam vero?
              Molestiae magni velit, voluptatum adipisci praesentium consequuntur reiciendis voluptates odio vitae quos unde aut. Porro explicabo dolores incidunt eligendi? Quisquam nulla repellat rem aspernatur adipisci eius dicta tempore tempora voluptatibus!
              Nemo magni debitis vero quis iusto modi quo amet. Pariatur quisquam sapiente autem, labore accusamus sit maiores. Quia animi quod rem sunt at in ipsum. Nostrum minus similique molestiae autem.
              Voluptatem sed adipisci soluta corporis tempora id animi dolores, iure consequuntur enim quas error suscipit nostrum nesciunt quisquam ducimus, repudiandae aspernatur in consectetur beatae iste maxime non aut. Necessitatibus, consequatur!
              Quia distinctio aliquam repudiandae nihil id corrupti nisi quaerat. Tempora, autem natus eaque maiores architecto delectus atque quod veniam officia. Ducimus accusamus quibusdam praesentium consequuntur minus officia eum enim non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro magnam vero, praesentium saepe labore amet vitae esse minima eligendi asperiores iste officia vel ratione velit maiores odit nisi explicabo.</li>
          </ul>
        </div>
      </template>
    </TheAccordion>
    <TheAccordion>
      <template v-slot:accordion-title>
        <span class="accordion-title">Contents</span>
      </template>
      <template v-slot:content>
        <div class="accordion-content">
          <ul>
            <li>Gearbox</li>
            <li>Box</li>
            <li>Toolkit</li>
          </ul>
        </div>
      </template>
    </TheAccordion>
    <TheAccordion>
      <template v-slot:accordion-title>
        <span class="accordion-title">Delivery information</span>
      </template>
      <template v-slot:content>
        <div class="accordion-content">
          <p>We do not deliver this stuff in you country :c</p>
        </div>
      </template>
    </TheAccordion>
  </div>
</template>

<script>
import TheAccordion from '../components/TheAccordion.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'product',
  setup() {
    let title = ref(null);
    let url = ref('');
    const route = useRoute();

    fetch(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)
        .then(response => response.json())
        .then(json => {
          title.value = json.title
          url.value = json.url
        })
    return {
      title,
      url
    }
  },
  components: {
    TheAccordion
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
  margin: 0 25px 15px;
  grid-auto-columns: minmax(350px, 450px) 1fr;
  grid-auto-rows: 50px minmax(250px, 300px) minmax(50px, 80px);
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

.accordion-title {
  font-size: 1.1em;
  font-weight: bold;
  margin-right: 9px;
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
    grid-auto-rows: 50px minmax(100px, 120px) 150px 50px;
  }

  .product-pic {
    grid-column: 1 / 3;
  }

  .product-desc {
    grid-column: 1 / 3;
    grid-row: 3 / 3;
    margin: 0 5px;
  }

  .buttons {
    align-items: center;
    grid-row: 4 / 5;
  }
}
</style>

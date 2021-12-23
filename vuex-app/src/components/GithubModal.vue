<template>
  <form method="GET" @submit.prevent="searchForRepo">
    <div class="top-row">
      <h5>GitHub Api</h5>
    </div>
    <div class="input-row">
      <div class="input-username">
        <input type="text" placeholder="Enter username" name="input-repo-name" v-model="username">
      </div>
      <div class="input-find">
        <input type="submit" value="Search">
      </div>
    </div>
    <div class="result-row">
      <p>Repos list:</p>
      <ul class="repos-list" v-if="searching">
        <Loader />
      </ul>
      <ul class="repos-list" v-if="reposList.length">
        <GithubModalRepo v-for="(repos, index) in reposList"
                         :key="index"
                         :name="repos.name"
                         :link="repos.clone_url"
        />
      </ul>
      <ul v-else-if="emptyArray">
        <div class="repos-not-found">Not found</div>
      </ul>
    </div>
    <div class="bottom-row">
      <button type="button" @click="declineClickHandler">Close</button>
    </div>
  </form>
</template>

<script>
import GithubModalRepo from '@/components/GithubModalRepo.vue'
import {ref, watch, defineAsyncComponent} from 'vue'
import {declineClickHandler} from '../helpers/useDeclineModal.js'

export default {
  name: 'github-modal',
  setup() {
    let username = ref(null);
    let reposList = ref([]);
    let searching = ref(false);
    let emptyArray = ref(false);

    async function searchForRepo() {
      const URL = `https://api.github.com/users/${username.value}/repos`;

      searching.value = true;

      try {
        const response = await fetch(URL);
        reposList.value = await response.json();

        emptyArray.value = reposList.value.length > 0 ? false : true;
        searching.value = false;
      } catch (e) {
        catchError(e)
      }
    }

    function catchError(reason = "Error code is not defined") {
      throw new Error(`Something went wrong. Error code: ${reason}`)
    }

    // Replaces the first digit in the input field with '@'
    watch(username, (value) => {
      const reg = /^[0-9]/
      if (value.match(reg)) {
        let newValue = value.replace(reg, '@');
        username.value = newValue;
      }
    })

    return {
      username,
      reposList,
      searching,
      emptyArray,
      declineClickHandler,
      searchForRepo,
      catchError
    }
  },
  components: {
    GithubModalRepo,
    Loader: defineAsyncComponent(() => import('./Loader.vue')) 
  }
}
</script>

<style>
.modal-github.hidden {
  display: none;
}

.modal-github {
  display: grid;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid teal;

  grid-template-rows: repeat(2, 50px) 250px 50px;
  grid-template-columns: minmax(250px, 350px);
  height: 400px;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.modal-github .top-row,
.modal-github .input-row,
.modal-github .result-row {
  margin: 0 7px;
}

.modal-github .top-row {
  text-align: center;
  font-size: 1.4em;
}

.modal-github .input-row {
  margin-top: 15px;
  align-self: start;
  display: grid;
  grid-template-columns: 1fr 100px;
  font-size: 1.4em;
}

.input-row .input-username,
.input-row .input-find {
  width: 100%;
  height: 100%;
}

.input-username input {
  width: 95%;
  height: 100%;
  border: unset;
  border-bottom: 1px solid teal;
  outline: unset;
  padding: 0;
}

.input-find input {
  display: block;
  margin-left: auto;
  margin-right: 0;
  width: 100%;
  height: 100%;
  border: unset;
  padding: 0;
  cursor: pointer;
  background-color: tomato;
  color: #fff;
  border-radius: 2px;
}

.input-find input:hover {
  box-shadow: 0px 0px 25px 25px rgba(17, 17, 17, 0.2) inset;
}


.result-row {
  height: 100%;
  align-self: start;
}

.result-row ul {
  height: 170px;
  overflow-y: auto;
  position: relative;
}

.result-row ul li {
  margin: 15px;
  list-style: "✔️";
}

.repos-name,
.repos-link,
.copy-link {
  margin: 0 2px;
}

.repos-link {
  padding: 2px 5px;
  background-color: teal;
  color: #fff;
}

.repos-link:visited,
.copy-link:visited {
  color: #fff;
}

.copy-link {
  padding: 2px 5px;
  background-color: tomato;
  color: #fff;
  transition: 0.2ms all ease;
  cursor: pointer;
}

.copy-link:active {
  background-color: teal;
}

.repos-not-found {
  width: 125px;
  height: 25px;
  background-color: tomato;
  color: white;
  font-size: 1.2em;
  text-align: center;
  line-height: 1.2em;
}

.repos-not-found.hidden {
  display: none;
}

@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.bottom-row {
  justify-content: center;
}

.bottom-row button {
  display: block;
  margin: 0 auto;
  background-color: tomato;
  color: #fff;
  border: unset;
  border-radius: 2px;
  height: 100%;
  width: 150px;
  font-size: 1.2em;
  cursor: pointer;
}

.bottom-row button:hover {
  box-shadow: 0px 0px 25px 25px rgba(17, 17, 17, 0.2) inset;
}

</style>

<template>
  <header class="header">
    <div class="container hf">
      <div class="header__row">
        <div class="header__info">
          <h3>Hey, <span ref='headerUsername' class="header-username"> {{ username }}</span> it's a vue app
          </h3>
        </div>
        <div class="header__nav-icon">
          <input type="checkbox" class="header__nav-input" id="nav-bars">
          <label for="nav-bars" class="header__nav-bars" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </label>
        </div>
        <nav class="header__nav" :class="{ 'expanded': showMenu }">

          <router-link :to="{ name: 'home' }" class="header__nav-item">Home</router-link>
          <a href="" @click.prevent="toggleModal" class="header__nav-item github">GitHub
          </a>
          <a href="" @click.prevent="toggleModal" class="header__nav-item login"
             v-if="isDefaultUsername(username)"
          >Sign up</a>
          <a href="" @click.prevent="toggleModal" class="header__nav-item bom">BOM</a>
          <router-link :to="{ name: 'products' }" class="header__nav-item">Products</router-link>
          <a href="https://www.google.com/" target="_blank" class="header__nav-item">Gallery
            <div class="new-badge">new</div></a>
          <a href="https://github.com/bybbsy/Frontend-internship/tree/main/vue-app" target="_blank"
             class="header__nav-item">Docs</a>
          <button class="header__nav-item exit-input" :class="{ hidden: isDefaultUsername(username) }"
                  @click="logoutHandler" type="submit">Log out
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {computed} from 'vue'
import {useStore} from '../store/index'
import {logoutHandler, getUsername, isDefaultUsername} from "../helpers/useAuthManager";

EventTarget
export default {
  name: 'the-header',
  setup() {
    let username = computed(() => getUsername());
    const store = useStore();

    function getTargetName(target: HTMLAnchorElement) {
      return target.classList[target.classList.length - 1];
    } 

    function toggleModal(event: Event) {
      // Toggling menu if it is opened
      if(store.getters.getShowMenu) {
        store.dispatch('TOGGLE_MENU_STATE');
      }
      
      store.dispatch('toggleModal', {
        name: getTargetName(event.target as HTMLAnchorElement),
        showModal: true
      })
    }

    return {
      username,
      isDefaultUsername,
      logoutHandler,
      toggleModal,
      showMenu: computed(() => store.getters.getShowMenu),
      showModal: computed(() => store.getters.showModal),
      toggleMenu: () => store.commit('TOGGLE_MENU_STATE'),
    }
  }
}
</script>

<style>
.container.hf {
  min-height: 50px;
  background-color: unset;
}

header {
  padding: 0 5px;
}

.header__row {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
}

.header__nav {
  display: flex;
  width: fit-content;
  margin-left: auto;
}

.header-username {
  color: #fff;
}

.header__nav-list {
  display: flex;
}

.header__nav-item {
  display: block;
  height: 25px;
  position: relative;
  margin: 0 10px;
  text-transform: uppercase;
  text-decoration: unset;
  color: #fff;
  font-weight: 500;
}

.modal.hidden {
  display: none;
}

.header__nav-item.exit-input {
  background-color: tomato;
  border: unset;
  font-size: 1em;
  appearance: unset;
  align-items: unset;
  font-family: Urbanist, sans-serif;
  margin-top: -2px;
  height: 27px;
  cursor: pointer;
}

.header__nav-item.exit-input.hidden {
  display: none;
}

.header__nav-item.login {
  padding: 0 5px;
  line-height: 22px;
  background: linear-gradient(to left, salmon 50%, rgb(25, 153, 175) 50%) right;
  background-size: 200%;
  transition: 0.5s all ease;
}

.header__nav-item.login.hidden {
  display: none;
}

.header__nav-item.js-features {
  padding: 0 5px;
  line-height: 22px;
  background: linear-gradient(to left, salmon 50%, rgb(255, 255, 255) 50%) right;
  background-size: 200%;
  transition: 0.5s all ease;
}


.header__nav-item.login:hover {
  background-position: left;
}

.header__nav-item.js-features:hover {
  color: rgb(250, 207, 16);
  background-position: left;
}

.new-badge {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -11px;
  margin-right: -10px;
  font-size: 0.6em;
  font-weight: 600;
  color: #111;
  background-color: #edd23b;
  padding: 1px 3px;
  line-height: 1.1em;
  border-radius: 3px;
  border: 1px solid #111;
}

/* .new-badge.animate {
    animation: jump 2s;
} */

@keyframes jump {
  from {
    margin-top: -11px;
  }
  to {
    margin-top: 10px;
  }
}

.header__nav-item.login::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: #fff;
}

.header__nav-item.login::before {
  width: 2px;
  height: 100%;
}

.header__nav-item.login:hover::before {
  background: #fff;
}

.header__nav-item::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: 0.5s all ease-out;
}

.header__nav-item:hover {
  color: rgb(204, 204, 204);
}

.header__nav-item:hover::before {
  background: rgb(31, 31, 31);
}

.header__nav-icon {
  display: none;
}

.header__nav-input {
  display: none;
}

.header__nav-bars {
  font-size: 2em;
}

@media screen and (max-width: 930px) {
  .header__nav {
    position: absolute;
    top: 0;
    right: -100%;
    margin-top: 60px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: tomato;
    padding: 15px 0;
    transition: 0.7s ease;
    z-index: 2;
  }

  .header__nav-item,
  .header__nav-item.login {
    background: unset;
  }

  .header__nav-item .new-badge {
    display: none;
  }

  .header__nav-item.sign-up {
    background: unset;
    background-size: unset;
  }

  .header__nav-item.sign-up::before {
    display: none;
  }

  .header__nav-item::before {
    display: none;
  }

  .header__nav.expanded {
    right: 0;
  }

  .header__nav-item {
    margin: 25px 0;
    text-align: center;
    font-size: 1.25em;
  }

  .header__nav-icon {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }

  .header__nav-item::after {
    display: none;
  }
}
</style>

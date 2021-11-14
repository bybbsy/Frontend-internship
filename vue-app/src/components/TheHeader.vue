<template>
  <header class="header">
        <div class="container hf">
            <div class="header__row">
                <div class="header__info" id="header-info">
                    <h3>Hey, <span class="header-username"> {{ username }}</span> it's a simple html webpage</h3>
                </div>
                    <div class="header__nav-icon">
                        <input type="checkbox" class="header__nav-input" id="nav-bars">
                        <label for="nav-bars" class="header__nav-bars">
                            <i class="fas fa-bars"></i>
                        </label>
                    </div>
                <nav class="header__nav">
                    <a href="" @click.prevent="toggleModal" class="header__nav-item github">GitHub
                        <div class="new-badge">new</div>
                    </a>
                    <a href="" @click.prevent="toggleModal" class="header__nav-item login"
                      v-if="username === defaultUsername"
                    >Sign up</a>
                    <a href="" @click.prevent="toggleModal" class="header__nav-item bom">BOM</a>
                    <router-link :to="{ name: 'products' }" class="header__nav-item">Products</router-link>
                    <a href="https://www.google.com/" target="_blank" class="header__nav-item">History</a>
                    <a href="https://www.google.com/" target="_blank" class="header__nav-item">Gallery</a>
                    <a href="https://www.google.com/" target="_blank" class="header__nav-item">Docs</a>
                    <button class="header__nav-item exit-input" :class="{ hidden: username === defaultUsername }" @click="logoutHandler" type="submit">Log out </button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'the-header',
    data: function() {
        return {
            modalData: {
                name: '',
                showModal: false
            },
            defaultUsername: 'Stranger',
            username: '',
        }
    },
    created: function() {
      this.username = localStorage.getItem('username') ?? this.defaultUsername;
    },
    methods: {
        toggleModal(event) {
             
            this.modalData.showModal = !this.modalData.showModal;
            let len =  event.target.classList.length;
            this.modalData.name = event.target.classList[len - 1];

            console.log("HEADER:", this.showModal)
            this.$emit('toggleModal', this.modalData)
            return this.showModal
        },
        logoutHandler() {
          if(localStorage.getItem('username')) {
            localStorage.removeItem('username');
            this.$router.go()
          }
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
    top:0;
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
</style>

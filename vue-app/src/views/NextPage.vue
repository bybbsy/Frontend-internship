<template>
    <div class="information">
        <div class="information__title">
            <h4>Hello, <span class="username">{{ username }}</span>, it's the next page</h4>
        </div>
        <form class="information__auth" v-if="username !== 'Stranger'" @submit.prevent="logOut">
            <h5 class="information__auth-info">
                <span class="e-mail">mail@mail.ru</span>
                <input type="submit" class="exit-button" value="Log out">
            </h5>
        </form>
        <div class="information__subtitle">
            <h5>Here's some information about this page:</h5>
        </div>
        <div class="information__list">
            <ul>
                <li>Current URL: <span class="url-value">{{ currentUrl }}</span></li>
                <li>Browser language: <span class="language-value">{{ language }}</span></li>
                <li>User Agent: <span class="ua-value"> {{ UA }}</span></li>
            </ul>
        </div>
        <div class="information__go-back">
            <div class="button" @click="goBack">Go back</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bom',
    data: function() {
        return {
            username: 'Stranger',
            currentUrl: null,
            language: null,
            UA: null
        }
    },
    created: function() {
        this.currentUrl = location.href;
        this.language = navigator.language;
        this.UA = navigator.userAgent;

        this.username = localStorage.getItem('username')
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        },
        logOut: function() {
            localStorage.removeItem('username');
            this.username = 'Stranger'
        }
    }
}
</script>

<style>
.information {
    display: grid;
    justify-content: center;
    font-size: 1.2em;
    margin: 15% 10px 0;
    display: grid;
    grid-template-rows: repeat(2, 50px) min-content min-content;
    grid-template-columns: minmax(300px, 350px);
}

.information.auth {
    grid-template-rows: repeat(3, 50px) min-content 50px;
}


.username {
    color: teal;
}

.information__auth {
}

.information__auth.hidden {
    display: none;
}

.information__auth-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.exit-button {
    width: 7em;
    height: 2em;
    background-color: tomato;
    color: #fff;
    border: unset;
    cursor: pointer;
    border-radius: 2px;
}
.exit-button:hover {
    box-shadow: 0px 0px 7em 2em rgba(17, 17, 17, 0.2) inset;
}
.information__list {
    align-self: start;
}

.information__list ul {
    list-style: none;
    padding: 0;
}

.information__list ul li {
    margin: 5px 0;
}

.information__list ul li::before {
    content: "✔️";
    margin-left: 5px;
    margin-right: 7px;
}
.information__go-back {
    align-self: center;
}
.information__go-back .button {
    display: block;
    width: 15em;
    height: 2em;
    background-color: tomato;
    color: #fff;
    border: unset;
    cursor: pointer;
    border-radius: 2px;
    text-align: center;
    line-height: 2em;
}
</style>
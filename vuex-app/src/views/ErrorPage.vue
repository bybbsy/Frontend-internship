<template>
    <div class="error-block">
        <div class="error-block__img">
            <img src="../assets/img/page-not-found.png" alt="" class="error-img">
        </div>
        <div class="error-block__link">
            <router-link :to="{ name: 'home'}" class="main-page__link">Go to the main page</router-link>
        </div>
    </div>
</template>

<style scoped>
    .error-img {
        display: flex;
        max-width: 100%;
        height: auto;
        object-fit: contain;
        margin: auto;
    }

    .main-page__link:visited {
        color: #fff;
    }

    .main-page__link {
        display: flex;
        margin: 0 auto;
        width: fit-content;
        font-size: 1.5em;
        background-color: tomato;
        color: #fff;
        padding: 2px 3px;
        line-height: 1.5em;
        border-radius: 3px;

    }
</style>
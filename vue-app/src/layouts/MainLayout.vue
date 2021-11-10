<template>
    <div class="wrapper">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'

export default {
    name: 'main-layout',
    components: {
        Header, Footer
    }
}
</script>

<style>

</style>
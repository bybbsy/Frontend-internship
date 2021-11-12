<template>
    <div class="wrapper">
        <Header @toggleModal="onClickChild"/>
        <span v-bind="modal">SPAN: {{ modal ? modal.showModal : 'empty :c'}}</span>
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'

export default {
    name: 'main-layout',
    data: function() {
        return {
            modal: null
        }
    },
    components: {
        Header, Footer
    },
    methods: {
        onClickChild (value) {
            this.modal = value;
            return this.modal
        }
    },
}
</script>

<style>

</style>
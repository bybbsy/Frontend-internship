<template>
    <div class="wrapper">
        <Header @toggleModal="onClickChild"/>
        <router-view />
        <Footer />
        <div class="modal" :class="{ 'hidden': !modalData.showModal }">
            <SignupModal :modalData="modalData" class="login-block" :class="{ hidden: modalData.name !== 'login' }"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
import SignupModal from '@/components/SignupModal.vue'

export default {
    name: 'main-layout',
    data: function() {
        return {
            modalData: {
                name: '',
                showModal: false
            }
        }
    },
    components: {
        Header, Footer, SignupModal
    },
    methods: {
        onClickChild (value) {
            console.log(value)
            this.modalData = value;
            return this.modalData
        }
    },
}
</script>

<style>
.modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(82, 82, 82, 0.479);
      z-index: 1;
  }
</style>
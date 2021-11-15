<template>
    <div class="wrapper" :class="{'no-scroll': modalData.showModal}">
        <Header @toggleModal="onClickChild"/>
        <router-view />
        <Footer />
        <div class="modal" :class="{ 'hidden': !modalData.showModal }" @click="outerClickHandler ">
            <div class="pop-up__list"></div>
            <SignupModal :modalData="modalData" class="login-block" :class="{ hidden: modalData.name !== 'login' }"/>
            <BomModal :modalData="modalData" class="modal-bom" :class="{ hidden: modalData.name !== 'bom' }"/>
            <GithubModal :modalData="modalData" class="modal-github" :class="{ hidden: modalData.name !== 'github' }"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
import SignupModal from '@/components/SignupModal.vue'
import BomModal from '@/components/BomModal.vue'
import GithubModal from '@/components/GithubModal.vue'

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
    methods: {
        onClickChild: function (value) {
            console.log("LAYOUT:", this.modalData.name, this.modalData.showModal )
            this.modalData = value;
            return this.modalData
        },
        outerClickHandler: function(event) {
            if(event.target.classList[0] === 'modal') {
                this.modalData.name = ''
                this.modalData.showModal = false;
            }
        }
    },
    components: {
        Header, Footer, SignupModal, BomModal, GithubModal
    }
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
  .pop-up__list {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 1.5em;
      display: flex;
      flex-direction: column;
  }
</style>
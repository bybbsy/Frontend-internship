<template>
    <div class="wrapper" :class="{'no-scroll': modalData.showModal || showMenu }">
        <Header @toggleModal="onClickChildHandler" @showMenu="onToggleMenuHander"/>
        <router-view />
        <Footer />
        <div class="modal" :class="{ 'hidden': !modalData.showModal }" @click="outerClickHandler ">
            <div class="pop-up__list">
                <ModalPopup :onSignUp="onSignUp" v-if="onSignUp.message" />
            </div>
            <SignupModal :modalData="modalData" @signed-up="onSignUpHandler" class="login-block" :class="{ hidden: modalData.name !== 'login' }"/>
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
import ModalPopup from '@/components/ModalPopup.vue'
export default {
    name: 'main-layout',
    data: function() {
        return {
            modalData: {
                name: '',
                showModal: false
            },
            onSignUp: {
                message: '',
                type: ''
            },
            showMenu: false
        }
    },
    methods: {
        onClickChildHandler: function (value) {
            this.modalData = value;
            return this.modalData
        },
        outerClickHandler: function(event) {
            if(event.target.classList[0] === 'modal') {
                this.modalData.name = ''
                this.modalData.showModal = false;
            }
        },
        onSignUpHandler(value) {
            this.onSignUp.message = value.message
            this.onSignUp.type = value.type
        },
        onToggleMenuHander(value) {
            this.showMenu = value;
        }
    },
    components: {
        Header, Footer, SignupModal, BomModal, GithubModal, ModalPopup
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
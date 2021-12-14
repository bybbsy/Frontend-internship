<template>
    <div class="wrapper" :class="{'no-scroll': modalData.showModal || showMenu }">
        <Header/>
        <router-view />
        <!-- <Footer /> -->
        <div class="modal" :class="{ 'hidden': !modalData.showModal }" @click="outerClickHandler ">
            <div class="pop-up__list">
                <ModalPopup :onSignUp="onSignUp" v-if="onSignUp.message" />
            </div>
            <SignupModal @signed-up="onSignUpHandler" class="login-block" :class="{ hidden: modalData.name !== 'login' }"/>
            <BomModal class="modal-bom" :class="{ hidden: modalData.name !== 'bom' }"/>
            <GithubModal class="modal-github" :class="{ hidden: modalData.name !== 'github' }"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
// import Footer from '@/components/TheFooter.vue'
import SignupModal from '@/components/SignupModal.vue'
import BomModal from '@/components/BomModal.vue'
import GithubModal from '@/components/GithubModal.vue'
import ModalPopup from '@/components/ModalPopup.vue'
import { useStore } from 'vuex'
import { computed, reactive } from '@vue/reactivity'

export default {
    name: 'main-layout',
    setup() {
        let store = useStore();

        let onSignUp = reactive({
            message: '',
            type: ''
        })

        let modalData = computed(() => store.getters.modalData)
        let showMenu = computed(() => store.getters.showMenu)
        
        function outerClickHandler(event) {
            if(event.target.classList[0] === 'modal') {
                store.commit('closeModal')
            }
        }

        function onSignUpHandler(value) {
            onSignUp.message = value.message
            onSignUp.type = value.type
        }
        return {
            onSignUp,
            modalData,
            showMenu,
            outerClickHandler,
            onSignUpHandler
        }
    },
    components: {
        Header,
        // Footer,
        SignupModal, BomModal, GithubModal, ModalPopup
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
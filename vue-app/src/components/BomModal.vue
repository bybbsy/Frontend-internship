<template>
  <div>
        <div class="row__current-url">
            <p>Current URL: <router-link :to="{ name: 'home' }" class="current-url__value">{{ currentUrl }}</router-link></p>
            <p><router-link :to="{ name: 'bom' }" class="current-url__next">Click here to achieve forward link! 🚀🚀🚀</router-link></p>
        </div>
        <div class="row__manage-history">
            <div class="manage-back" @click="goBack">
                <i class="fas fa-backward"></i>
                <div class="hint">Go to the previous page</div>
            </div>
            <div class="manage-forward" @click="goForward">
                <i class="fas fa-forward"></i>
                <div class="hint">Go the the next page</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bom-modal',
    props: {
        modalData: Object
    },
    data: function() {
        return {
            currentUrl: null
        }
    },
    created: function() {
        this.currentUrl = location.href
    },
    methods: {
        goForward: function() {
            this.$router.go(1)
        },
        goBack: function() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.modal-bom {
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translate(-50%, -25%);
      width: 500px;
      height: 220px;
      border-radius: 25px;
      border: 1px dashed tomato;
      background-color: #fff;
      display: grid;
      grid-template-rows: repeat(2, 100px);
      z-index: 1;
  }

  .modal-bom.hidden {
      display: none;
  }

  .row__current-url,
  .row__manage-history {
      display: grid;
      align-items: center;
      padding: 0 10px;
  }

  .current-url__value {
      display: inline-flex;
      width: 360px;
      text-overflow: ellipsis;
      white-space: nowrap; /* paragraph to one line */
      overflow:hidden; /* older browsers */
  }

  .row__manage-history {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
  }

  .manage-back,
  .manage-reload,
  .manage-forward {
      position: relative;
      cursor: pointer;
  }

  .manage-back .fas,
  .manage-reload .fas,
  .manage-forward .fas {
      font-size: 2em;
      color: tomato;
  }

  .manage-back:hover .hint,
  .manage-reload:hover .hint,
  .manage-forward:hover .hint {
      visibility: visible;
      opacity: 1;
      height: fit-content;
      transition: 0.2s all ease 0.8s;
  }

  .hint {
      opacity: 0;
      position: absolute;
      visibility: hidden;
      width: 100px;
      left: 0;
      bottom: 0;
      margin-bottom: -100%;
      height: 0;
      background-color: #fff;
      box-shadow: 0px 0px 5px 2px rgba(17, 17, 17, 0.69);
      font-size: 0.8em;
      padding: 2px;
  }

</style>
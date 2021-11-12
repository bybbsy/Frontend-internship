<template>
  <div>
        <div class="row__current-url">
            <p>Current URL: <a href="#" class="current-url__value">Nope:c</a></p>
            <p><a href="next-page.html" class="current-url__next">Click here to achieve forward link! 🚀🚀🚀</a></p>
        </div>
        <div class="row__manage-history">
            <div class="manage-back">
                <i class="fas fa-backward"></i>
                <div class="hint">Go to the previous page</div>
            </div>
            <div class="manage-forward">
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
</style>
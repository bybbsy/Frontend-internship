<template>
  <footer>
    <div class="container hf">
      <div class="footer-block">
        <div class="footer-block__header" id="contact-us">
          <h5>Contact us</h5>
        </div>
        <div class="footer-block__top">
          <a href="google.com" target="_blank" class="footer-top__vk">
            <i class="fas fa-bars"></i>
          </a>
          <a href="google.com" target="_blank" class="footer-top__vk">
            <i class="fas fa-bars"></i>
          </a>
          <a href="google.com" target="_blank" class="footer-top__vk">
            <i class="fas fa-bars"></i>
          </a>
          <a href="google.com" target="_blank" class="footer-top__inst">
            <i class="fas fa-bars"></i>
          </a>
        </div>
        <div class="footer-block__bottom">
          <p>© Some sort of copyrights</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'the-footer'
})
</script>

<style>
.footer-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 5px;
}

.footer-block__header h5 {
  color: #fff;
}

.footer-block__top {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-top__vk,
.footer-top__inst {
  margin: 5px 15px;
  position: relative;
  display: flex;
  width: 25px;
  height: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  text-decoration: none;
  color: teal;
}

.footer-top__vk::after,
.footer-top__inst::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 50%;
  border: 1px solid tomato;
}

.footer-block__bottom p {
  margin: 5px 0;
  font-size: 0.8em;
  font-weight: 200;
  color: #fff;
}
</style>

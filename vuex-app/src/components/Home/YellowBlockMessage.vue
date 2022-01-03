<template>
    <li class="messages-list__message-block active">
        <div class="messages-list__block-icon">
            <a href="#" class="messages-list__block-link" target="_self">
                <img src="@/assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image">
            </a>
        </div>
        <div class="messages-list__message-content">
            <div class="messages-list__message-info">
                <div class="messages-list__message-author">
                    <h5>{{ author }}</h5>
                </div>
                <div class="messages-list__message-brief">
                    <p>{{ content }}</p>
                </div>
            </div>
            <div class="messages-list__message-date">
                <p>{{ date }}</p>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
      author: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    }
})
</script>

<style>
.messages-list__message-block {
  position: relative;
  display: flex;
  margin: 10px 0;
  width: 100%;
  height: 50px;
  background-color: tomato;
  border-radius: 25px;

}

.messages-list__message-block.spam::after {
  content: "spam";
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -0.5em;
  margin-right: 1.5em;
  display: block;
  font-size: 0.8em;
  line-height: 0.8em;
  padding: 2px 5px;
  background-color: #666;
  border-radius: 4px;
  border: 1px solid teal;
  color: white;
  height: 1.3em
}

.messages-list__block-icon {
  display: flex;
  width: 45px;
  height: 45px;
  margin-top: 2.2px;
  margin-left: 2.5px;
  border-radius: 50%;
  z-index: 1;
}

.messages-list__block-link {
  display: block;
  border-radius: inherit;
}

.messages-list__block-image {
  display: flex;
  width: 45px;
  height: 45px;
  object-fit: cover;
  background-color: #fff;
  border-radius: inherit;
}

.messages-list__message-content {
  z-index: 1;
  display: flex;
  margin: 2.5px 5px;
  width: 100%;
  justify-content: space-between;
}

.messages-list__message-info {
  width: 100%;
  cursor: pointer;
}

.messages-list__message-brief {
  width: 60%;
}

.messages-list__message-brief p {
  margin: 7.5px 0 0 0;
  font-size: 0.8em;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.messages-list__message-date {
  display: flex;
}

.messages-list__message-date p {
  margin: auto 15px auto 0;
  font-size: 0.8em;
}

@media screen and (max-width: 1280px) {
  .messages-list__block-icon {
    margin-top: 2px;
    margin-bottom: 2px;
  }
}
</style>

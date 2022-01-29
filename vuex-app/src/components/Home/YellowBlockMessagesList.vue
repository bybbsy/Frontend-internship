<template>
  <ul class="messages-list">
    <YellowBlockMessage
        v-for="(message, index) in filteredMessages"
        :key="index"
        :date="message.date"
        :author="message.author"
        :content="message.content"
        :class="{ spam: message.spam }"
    />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import YellowBlockMessage from './YellowBlockMessage.vue'

export default defineComponent({
  name: 'yellow-block-messages-list',
  setup() {
    const filterKeys: string[] = ['message', 'subscribed', 'notifications'];

    interface message {
      date: string | Date,
      author: string,
      content: string
    }

    const messages: message[] = [
      {
        date: '12.02.21',
        author: 'John Doe',
        content: 'This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.'
      },
      {
        date: '12.08.21',
        author: 'John Doe',
        content: 'This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.'
      },
      {
        date: '12.08.21',
        author: 'Jeff La Quero',
        content: 'Hey. bud. Wanna hang out tis weekend?'
      },
      {
        date: '12.02.21',
        author: 'John Doe',
        content: 'This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.'
      }
    ];

    function filterMessage(msg: string) {
      for (let key in filterKeys) {
        if (msg.includes(filterKeys[key])) {
          return true
        }
      }
      return false
    }

    let filteredMessages = computed(() => {
      return messages.map(message => {
        let spam = filterMessage(message.content);
        return {...message, spam};
      })
    })

    return {
      messages,
      filteredMessages
    }
  },
  components: {
    YellowBlockMessage
  }
})
</script>

<style>
.messages-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .messages-list {
    height: 100%;
  }
}
</style>

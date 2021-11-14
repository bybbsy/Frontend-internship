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

<script>
import YellowBlockMessage from './YellowBlockMessage.vue'

export default {
    name: 'yellow-block-messages-list',
    data: function() {
        return {
            filterKeys: ['message', 'subscribed', 'notifications'],
            messages: [
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
            ]
        }
    },
    computed: {
      filteredMessages() {
        return this.messages.map(message => {
          let spamMsg = this.filterMessage(message.content);

          if(spamMsg) {
            message.spam = true
          }
          else {
            message.spam = false
          }
          return message
        })
      },
    },
    methods: {
      filterMessage(msg) {
        // console.log(msg)
        for(let key in this.filterKeys) {
          if(msg.includes(this.filterKeys[key])) {
            return true
          } 
        }
        return false
      }
    },
    components: {
        YellowBlockMessage
    }
}
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

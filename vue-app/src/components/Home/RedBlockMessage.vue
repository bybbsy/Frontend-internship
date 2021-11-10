<template>
  <div class="message-block">
      <div class="message-block__information">
            <div class="messages-list__block-icon">
                <a href="#" class="messages-list__block-link" target="_self">
                    <!-- <img src="../assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image"> -->
                </a>
            </div>
            <div class="message-block__block-description">
                <div class="message-block__top-row">
                    <div class="messages-block__message-author">
                        <a href="#">John Doe</a>
                    </div>
                    <div class="messages-block__message-date">
                        <h5>19 August 2021</h5>
                    </div>
                </div>
                <div class="message-block__bottom-row">
                    <div class="messages-block__message-addressee">
                        <h5>Addressee: You</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="message-block__message-content">
            <p class="message-block__message-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sequi dolorum! Quo modi obcaecati facere debitis similique explicabo id, nihil, deserunt recusandae culpa iste omnis, repudiandae eligendi voluptates fugit exercitationem.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .message-block {
      display: flex;
      flex-direction: column;
      /* height: calc(100% - 50px); */
  }

  .message-block__information {
      display: flex;
      background-color: rgba(104, 104, 104, 0.219);
      padding: 5px;
      border-radius: 20px 0px 20px 0px;
  }

  .message-block__block-description {
      margin-top: 2px;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
  }

  .message-block__top-row {
      display: flex;
      align-items: baseline;
  }

  .message-block__top-row a {
      display: flex;
      font-size: 0.8em;
      font-weight: 400;
      color: rgb(97, 97, 97);

  }
  .messages-block__message-date {
      margin-left: 5px;
  }

  .messages-block__message-date h5 {
      font-weight: 500;
  }

  .message-block__bottom-row {
      margin-top: auto;
      margin-bottom: 5px;
  }

  .messages-block__message-addressee h5 {
      font-weight: 500;
  }

  .message-block__message-content {
      display: flex;
      width: 100%;
      min-height: 50px;
      margin-top: 5px;
      background-color: rgba(104, 104, 104, 0.219);
  }

  .message-block__message-message {
      margin: 0;
      height: 100%;
      padding: 15px 5px;
  }
</style>
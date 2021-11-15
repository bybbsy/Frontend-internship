<template>
    <div class="pop-up">
        <div class="pop-up__wrapper">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pop-up',
    props: {
        message: {
            type: String,
            required: true,
            default: 'Empty :c'
        }
    }
}
</script>

<style>
.pop-up:first-child {
      margin-top: 0;
  }

  .pop-up {
      width: 250px;
      max-width: 255px;
      min-height: 2em;
      margin-top: 5px;
      margin-bottom: 5px;
      transition: 0.2s all ease;
  }

  .pop-up__wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      background-color: white;
      align-items: center;
      border-radius: 5px;
  }
  
  .pop-up__wrapper::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
  }

  .pop-up.declined .pop-up__wrapper::before {
      background-color: red;
  }

  .pop-up.successful .pop-up__wrapper::before {
      background-color: yellowgreen;
  }

  .pop-up__wrapper p {
      display: flex;
      margin: 2px 0 2px 15px;
  }
</style>
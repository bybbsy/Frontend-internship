<template>
    <aside class="green-block">
        <picture class="item">
            <source srcset="@/assets/img/image-50x50.jpg" media="(max-width: 1280px)">
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
        </picture>
        <picture class="item">
            <source srcset="@/assets/img/image-50x50.jpg" media="(max-width: 1280px)">
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
        </picture>
        <picture class="item">
            <source srcset="@/assets/img/image-50x50.jpg" media="(max-width: 1280px)">
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
            <img src="@/assets/img/image-25x25.jpg" alt="" >
        </picture>
    </aside>
</template>

<script>
export default {

}
</script>

<style>
    .green-block {
      display: flex;
      flex-direction: column;
      flex: 0 0 auto;
      margin-right: 5px;
      background: var(--block-color);
      border-radius: 20px 0px 20px 0px;
  }

  @media screen and (max-width: 1280px) {
      .green-block {
          flex: 1 0 100%;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
      }
  }
</style>
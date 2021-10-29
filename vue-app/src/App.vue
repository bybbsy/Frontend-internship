<template>
  <div id="app">
    <div class="wrapper">
        <header class="header">
            <div class="container hf">
                <div class="header__row">
                    <div class="header__info" id="header-info">
                        <h3>Hey, <span class="header-username"></span> it's a simple html webpage</h3>
                    </div>
                        <div class="header__nav-icon">
                            <input type="checkbox" class="header__nav-input" id="nav-bars">
                            <label for="nav-bars" class="header__nav-bars">
                                <i class="fas fa-bars"></i>
                            </label>
                        </div>
                    <nav class="header__nav">
                        <a href="#" class="header__nav-item git-hub">
                            <span>GitHub</span>
                            <div class="new-badge">new</div>
                        </a>
                        <a href="#sign-up" class="header__nav-item sign-up">Sign up</a>
                        <a href="#" class="header__nav-item bom">BOM</a>
                        <a href="https://www.google.com/" target="_blank" class="header__nav-item">Projects</a>
                        <a href="https://www.google.com/" target="_blank" class="header__nav-item">History</a>
                        <a href="https://www.google.com/" target="_blank" class="header__nav-item">Gallery</a>
                        <a href="https://www.google.com/" target="_blank" class="header__nav-item">Docs</a>
                        <button class="header__nav-item exit-input hidden" type="submit">Log out </button>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                    <div class="main">
                        <section class="red-block">
                            <div class="message-block">
                                <div class="message-block__information">
                                    <div class="messages-list__block-icon">
                                        <a href="#" class="messages-list__block-link" target="_self">
                                            <img src="./assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image">
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
                            <form action="" class="reply-block">
                                <div class="reply-block__reply">
                                    <textarea class="reply-block__textarea" name="reply"></textarea>
                                </div>
                                <div class="reply-block__buttons">
                                    <input type="submit" class="reply-block__submit" value="Send">
                                    <input type="button" class="reply-block__save" value="Save draft">
                                    <div class="reply-block__select">
                                        <div class="reply-block__custom-date">
                                            <label for="custom-date">Custom date</label>
                                            <input type="checkbox" name="" id="custom-date">
                                            <span class="checkmark"></span>
                                        </div>
                                        <div class="reply-block__calendar hidden">
                                            <input type="datetime-local" name="" id="">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                        <div class="green-and-pink">
                            <aside class="green-block">
                                <picture class="item">
                                    <source srcset="./assets/img/image-50x50.jpg" media="(max-width: 1280px)">
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                </picture>
                                <picture class="item">
                                    <source srcset="./assets/img/image-50x50.jpg" media="(max-width: 1280px)">
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                </picture>
                                <picture class="item">
                                    <source srcset="./assets/img/image-50x50.jpg" media="(max-width: 1280px)">
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                    <img src="./assets/img/image-25x25.jpg" alt="" >
                                </picture>
                            </aside> 
                            <aside class="pink-block"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, maxime error. Commodi, aliquam ipsum voluptatum placeat saepe similique, voluptate dicta magni reiciendis vitae, sit veniam magnam voluptatibus velit. Corporis, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum dicta, exercitationem similique nisi repudiandae optio qui? Atque provident iure ab nulla aspernatur quaerat, ratione sit saepe totam, itaque assumenda.
                                Sed quam provident quaerat, saepe, mollitia nihil placeat dignissimos ipsa delectus eius fugiat omnis deserunt sapiente inventore, labore ipsam dolores at beatae explicabo. Nobis architecto fugiat quasi voluptas velit omnis!</p></aside>
                        </div>
                    </div>
                <aside class="yellow-block">
                    <ul class="messages-list">
                        <li class="messages-list__message-block active">
                            <div class="messages-list__block-icon">
                                <a href="#" class="messages-list__block-link" target="_self">
                                    <img src="./assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image">
                                </a>
                            </div>
                            <div class="messages-list__message-content">
                                <div class="messages-list__message-info">
                                    <div class="messages-list__message-author">
                                        <h5>John Doe</h5>
                                    </div>
                                    <div class="messages-list__message-brief">
                                        <p>This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.</p>
                                    </div>
                                </div>
                                <div class="messages-list__message-date">
                                    <p>12.02.21</p>
                                </div>
                            </div>
                        </li>
                        <li class="messages-list__message-block">
                            <div class="messages-list__block-icon">
                                <a href="#" class="messages-list__block-link" target="_self">
                                    <img src="./assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image">
                                </a>
                            </div>
                            <div class="messages-list__message-content">
                                <div class="messages-list__message-info">
                                    <div class="messages-list__message-author">
                                        <h5>John Doe</h5>
                                    </div>
                                    <div class="messages-list__message-brief">
                                        <p>This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.</p>
                                    </div>
                                </div>
                                <div class="messages-list__message-date">
                                    <p>12.08.21</p>
                                </div>
                            </div>
                        </li>
                        <li class="messages-list__message-block">
                            <div class="messages-list__block-icon">
                                <a href="#" class="messages-list__block-link" target="_self">
                                    <img src="./assets/img/vue-9.svg" alt="Image" class="messages-list__block-image">
                                </a>
                            </div>
                            <div class="messages-list__message-content">
                                <div class="messages-list__message-info">
                                    <div class="messages-list__message-author">
                                        <h5>Jeff La Quero</h5>
                                    </div>
                                    <div class="messages-list__message-brief">
                                        <p>Hey, bud, wanna hang out tis weekend?</p>
                                    </div>
                                </div>
                                <div class="messages-list__message-date">
                                    <p>12.02.21</p>
                                </div>
                            </div>
                        </li>
                        <li class="messages-list__message-block">
                            <div class="messages-list__block-icon">
                                <a href="#" class="messages-list__block-link" target="_self">
                                    <img src="./assets/img/1617986244_11.jpg" alt="Image" class="messages-list__block-image">
                                </a>
                            </div>
                            <div class="messages-list__message-content">
                                <div class="messages-list__message-info">
                                    <div class="messages-list__message-author">
                                        <h5>Awesome Boi</h5>
                                    </div>
                                    <div class="messages-list__message-brief">
                                        <p>This message was sent to you because you subscribed on our daily e-mail notifications. Just keep you posted, bud.</p>
                                    </div>
                                </div>
                                <div class="messages-list__message-date">
                                    <p>12.02.21</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
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
        <div class="modal hidden">
            <div class="pop-up__list">

            </div>
            <form method="post" class="login-block hidden">
                <div class="login-block__signup-info">
                    <h4>Sign up</h4>
                </div>
                <div class="login-block__username-block">
                    <span class="login-block__username-label">Username</span>
                    <input name="username" type="text" class="login-block__username-username" required>
                </div>
                <div class="login-block__details-block">
                    <div class="login-block__sex-block">
                        <span class="login-block__sex-label">Sex</span>
                        <div class="login-block__sex-female">
                            <label for="input-female" class="login-block__female-label">F</label>
                            <input type="radio" class="login-block__sex-female" name="sex" value="female" id="input-female">
                            <span class="radiomark"></span>
                        </div>
                        <div class="login-block__sex-male">
                            <label for="input-male" class="login-block__male-label">M</label>
                            <input type="radio" class="login-block__sex-male" name="sex" value="male" id="input-male">
                            <span class="radiomark"></span>
                        </div>
                    </div>
                    <div class="login-block__country-block">
                        <span class="login-block__country-label">Country</span>
                        <select name="country" class="login-block__country-select">
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Russia">Russia</option>
                            <option value="Germany">Deutschland</option>
                        </select>
                    </div>
                </div>
                <div class="login-block__email-block">
                    <span class="login-block__email-label">E-mail</span>
                    <input name="email" type="email" class="login-block__email-email" required>
                </div>
                <div class="login-block__password-block">
                    <span class="login-block__password-label">Password</span>
                    <input name="password" type="password" class="login-block__password-password" required>
                </div>
                <div class="login-block__phone-block">
                    <span class="login-block__phone-label">Phone number</span>
                    <input name="phone" type="tel" class="login-block__phone-phone" required>
                </div>
                <div class="login-block__button-block">
                    <input type="submit" value="Sign up" class="login-block__signup-btn">
                    <input type="button" value="Decline" class="login-block__decline-btn">
                </div>
            </form>
            <div class="modal-bom hidden">
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
            <div class="modal-github hidden">
                <div class="top-row">
                    <h5>GitHub Api</h5>
                </div>
                <div class="input-row">
                    <div class="input-username">
                        <input type="text" placeholder="Enter username">
                    </div>
                    <div class="input-find">
                        <input type="submit" value="Search">
                    </div>
                </div>
                <div class="result-row">
                    <p>Repos list:</p>
                    <ul class="repos-list">
                        <div class="lds-spinner hidden"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        <div class="repos-not-found hidden">Not found</div>
                    </ul>
                </div>
                <div class="bottom-row">
                    <button type="button">Close</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
      --block-color: rgba(228, 240, 247, 0.781);
      --message-top-block-color: #fff;
      --main-background: rgba(231, 231, 231, 0.527);
  }

  ::-webkit-scrollbar {
      width: 5px;
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
      background: tomato;
  }

  ::-webkit-scrollbar-button {
      height: 5px;
      background: teal;
  }


  html,
  body {
      font-family: Urbanist, Roboto, sans-serif;
      margin: 0;
      overflow-x: hidden;
      scrollbar-color: tomato teal;
      scrollbar-width: thin;
  }
  input[type=text],
  input[type=email],
  input[type=password],
  input[type=tel] {
      font-family: Roboto, sans-serif;
  }


  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a {
      text-decoration: none;
  }

  h2 {
      margin: auto 0;
      width: 100%;
      text-align: center;
  }

  h5 {
      margin: 0;
  }

  .wrapper {
      position: relative;
      background: #ccc;
      height: 100vh;
      overflow-x: hidden;
  }

  .wrapper.no-scroll {
      overflow: hidden;
  }
  .container {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      flex: 0 1 100%;
      background: var(--main-background);
  }

  .container.hf {
      min-height: 50px;
      background-color: unset;
  }

  header {
      padding: 0 5px;
  }

  main {
      display: flex;
      min-height: 100%;
  }

  .header__row {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      width: 100%;
  }

  .header__nav {
      display: flex;
      width: fit-content;
      margin-left: auto;
  }

  .header-username {
      color: #fff;
  }

  .header__nav-list {
      display: flex;
  }

  .header__nav-item {
      display: block;
      height: 25px;
      position: relative;
      margin: 0 10px;
      text-transform: uppercase;
      text-decoration: unset;
      color: #fff;
      font-weight: 500;
  }
  .modal.hidden {
      display: none;
  }

  .header__nav-item.exit-input {
      background-color: tomato;
      border: unset;
      font-size: 1em;
      appearance: unset;
      align-items: unset;
      font-family: Urbanist, sans-serif;
      margin-top: -2px;
      height: 27px;
      cursor: pointer;
  }

  .header__nav-item.exit-input.hidden {
      display: none;
  }

  .header__nav-item.sign-up {
      padding: 0 5px;
      line-height: 22px;
      background: linear-gradient(to left, salmon 50%, rgb(25, 153, 175) 50%) right;
      background-size: 200%;
      transition: 0.5s all ease;
  }

  .header__nav-item.sign-up.hidden {
      display: none;
  }

  .header__nav-item.js-features {
      padding: 0 5px;
      line-height: 22px;
      background: linear-gradient(to left, salmon 50%, rgb(255, 255, 255) 50%) right;
      background-size: 200%;
      transition: 0.5s all ease;
  }


  .header__nav-item.sign-up:hover {
      background-position: left;
  }

  .header__nav-item.js-features:hover {
      color: rgb(250, 207, 16);
      background-position: left;
  }

  .new-badge {
      position: absolute;
      top:0;
      right: 0;
      margin-top: -11px;
      margin-right: -10px;
      font-size: 0.6em;
      font-weight: 600;
      color: #111;
      background-color: #edd23b;
      padding: 1px 3px;
      line-height: 1.1em;
      border-radius: 3px;
      border: 1px solid #111;
  }

  /* .new-badge.animate {
      animation: jump 2s;
  } */

  @keyframes jump {
      from {
          margin-top: -11px;
      }
      to {
          margin-top: 10px;
      }
  }
  .header__nav-item.sign-up::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      background: #fff;
  }

  .header__nav-item.sign-up::before {
      width: 2px;
      height: 100%;
  }

  .header__nav-item.sign-up:hover::before {
      background: #fff;
  }

  .header__nav-item::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      transition: 0.5s all ease-out;
  }

  .header__nav-item:hover {
      color: rgb(204, 204, 204);
  }

  .header__nav-item:hover::before {
      background: rgb(31, 31, 31);
  }

  .header__nav-icon {
      display: none;
  }
  .header__nav-input {
      display: none;
  }

  .header__nav-bars {
      font-size: 2em;
  }


  header, footer {
      background-color: rgb(25, 153, 175);
  }

  /* Main */
  .main {
      display: flex;
      flex: 2 1;
      flex-flow: row wrap;
      margin: 5px;
  }

  .red-block {
      display: flex;
      flex-direction: column;
      background: red;
      flex: 2 0 100%;
      margin-bottom: 5px;
      min-height: 200px;
      padding: 10px;
      background: var(--block-color);
      border-radius: 5px;
  }

  .green-and-pink {
      display: flex;
      flex: 0 1 auto;
      min-height: 200px;
      height: fit-content;
      height: -moz-fit-content;
  }

  .green-block {
      display: flex;
      flex-direction: column;
      flex: 0 0 auto;
      margin-right: 5px;
      background: var(--block-color);
      border-radius: 20px 0px 20px 0px;
  }

  .pink-block {
      display: flex;
      flex-direction: column;
      background: var(--block-color);
      border-radius: 5px;
      padding: 0 5px;
      flex: 0 1 100%;
  }

  .item {
      display: flex;
      width: 100px;
      height: 100px;
      background-color: rgba(121, 187, 121, 0.582);
      flex: 1 1 100%;
      margin: 20px 0;
      flex-wrap: wrap;
      align-items: center;
  }

  /* Aside */
  .yellow-block {
      display: flex;
      flex: 1 0;
      background: var(--block-color);
      border-radius: 5px;
      margin: 5px;
      flex-direction: column;
      padding: 5px;
      align-items: center;
      z-index: 1;
  }

  .messages-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 0;
  }
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

  /*.messages-list__message-block.active::after {*/
  /*    content: "";*/
  /*    position: absolute;*/
  /*    top: 0;*/
  /*    left: 0;*/
  /*    right: 0;*/
  /*    bottom: 0;*/
  /*    margin: -1px;*/
  /*    border-radius: 25px;*/
  /*    border: 2px solid #111;*/
  /*}*/

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

  .reply-block {
      display: flex;
      flex-direction: column;
      margin-top: auto;
  }

  .reply-block__reply {
      margin-top: 5px;
  }

  .reply-block__textarea {
      width: 100%;
      height: 45px;
      resize: none;
      font-family: Roboto, sans-serif;
      border-radius: 25px;
      padding: 5px 15px;
  }

  .reply-block__textarea:focus {
      outline: unset;
  }

  .reply-block__buttons {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      row-gap: 25px;
  }

  .reply-block__select {
      display: flex;
      flex-direction: row;
  }

  .reply-block__calendar.hidden {
      width: 0;
      opacity: 0;
      overflow-x: hidden;
  }

  .reply-block__calendar.hidden input {
      height: 0;
  }

  .reply-block__calendar {
      display: flex;
      flex: 1;
      transition: 1s all ease;
      overflow-x: hidden;
  }

  .reply-block__calendar input {
      border: unset;
      outline: unset;
      width: 100%;
      font-family: Roboto, sans-serif;
  }

  .reply-block__submit,
  .reply-block__save {
      margin: 0 5px;
      height: 35px;
      background: linear-gradient(to left, lightcoral 50%, teal 50%) right;
      background-size: 210%;
      transition: 1s all ease-out;
      border: unset;
      color: #fff;
      cursor: pointer;
      font-size: 1em;
      font-family: Urbanist, sans-serif;
  }

  .reply-block__submit:hover,
  .reply-block__save:hover {
      background-position: left;
  }
  .reply-block__custom-date {
      position: relative;
      display: flex;
      align-items: baseline;
  }

  .reply-block__custom-date label {
      align-self: center;
      margin-left: 5px;
      margin-right: 10px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }

  .reply-block__custom-date input {
      position: absolute;
      cursor: pointer;
      width: 0;
      height: 0;
      opacity: 0;
  }

  .checkmark {
      height: 25px;
      width: 25px;
      background-color: tomato;
  }

  .reply-block__custom-date:hover input ~ .checkmark {
      background: #ccc;
  }


  .checkmark::after {
      content: "";
      position: absolute;
      display: none;
  }

  .reply-block__custom-date input:checked ~ .checkmark {
      background: teal;
  }

  .reply-block__custom-date input:checked ~ .checkmark::after {
      display: block;
  }

  .reply-block__custom-date .checkmark::after {
      right: 8px;
      top: 2px;
      width: 10px;
      height: 15px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }

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

  .login-block {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 500px;
      background-color: #fff;
      column-gap: 15px;
      display: grid;
      /* padding: 15px; */
      grid-template-columns: minmax(270px, 350px);
      grid-template-rows: repeat(6, 50px) 70px;
      row-gap: 15px;

      border-radius: 15px;
  }
  .login-block.hidden {
      display: none;
  }

  .login-block::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      margin: -1px;
      border: 2px dotted teal;
      border-radius: 15px;
  }



  .login-block__signup-info {
      display: grid;
      align-items: center;
  }

  .login-block__signup-info h4 {
      margin: 5px 0 0;
      text-align: center;
      font-size: 1.5em;
      text-shadow: 5px 1px 2px tomato;
  }

  .login-block__username-block,
  .login-block__email-block,
  .login-block__password-block,
  .login-block__phone-block {
      display: grid;
      grid-template-rows: 20px 30px;
  }

  .login-block__details-block,
  .login-block__sex-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
  }


  .login-block__sex-label {
      text-align: center;
      grid-area: 1 / 1 / 1 / 3;
  }

  .login-block__sex-female,
  .login-block__sex-male {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 15px);
      justify-self: center;
  }


  .login-block__sex-female label,
  .login-block__sex-male label {
      align-self: center;
      margin-left: 5px;
      margin-right: 10px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }

  .login-block__sex-female input,
  .login-block__sex-male input {
      position: absolute;
      cursor: pointer;
      width: 0;
      height: 0;
      opacity: 0;
  }

  .radiomark {
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
  }

  .login-block__sex-female:hover input ~ .radiomark,
  .login-block__sex-male:hover input ~ .radiomark {
      background: tomato;
  }

  .radiomark::after {
      content: "";
      position: absolute;
      display: none;
  }

  .login-block__sex-female input:checked ~ .radiomark,
  .login-block__sex-male input:checked ~ .radiomark {
      background: teal;
  }

  .login-block__sex-female input:checked ~ .radiomark::after,
  .login-block__sex-male input:checked ~ .radiomark::after {
      display: block;
  }

  .login-block__sex-female .radiomark::after,
  .login-block__sex-male .radiomark::after {
      right: 0;
      margin-right: -2px;
      top: 2px;
      width: 10px;
      height: 15px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }


  .login-block__female-label {
      justify-self: center;
  }

  .login-block__male-label {
      justify-self: center;
  }
  .login-block__country-block {
      display: grid;
  }

  .login-block__country-select {
      width: 100%;
      font-family: Roboto, sans-serif;
      background: #fff;
      border: 1px solid tomato;
  }

  .login-block__country-select:focus {
      outline: unset;
  }
  .login-block__signup-info,
  .login-block__username-block,
  .login-block__details-block,
  .login-block__email-block,
  .login-block__password-block,
  .login-block__phone-block,
  .login-block__button-block {
      margin: 0 10px;
  }

  .login-block__username-username,
  .login-block__email-email,
  .login-block__password-password,
  .login-block__phone-phone {
      padding: 0 5px;
      border: 1px solid #111;
  }

  .login-block__username-username:focus,
  .login-block__email-email:focus,
  .login-block__password-password:focus,
  .login-block__phone-phone:focus  {
      outline: 2px solid teal;
  }

  .login-block__email-email:invalid {
      outline: 1px solid rgb(255, 0, 0);
      background-color: rgba(241, 113, 113, 0.568);
  }

  .login-block__username-username:active,
  .login-block__email-email:active,
  .login-block__password-password:active,
  .login-block__phone-phone:active  {
      outline: unset;
  }

  .login-block__button-block {
      display: grid;
      grid-template-columns: repeat(2, minmax(25px, 100px));
      grid-template-rows: minmax(25px, 50px);
      justify-content: space-around;
      align-self: flex-end;
  }
  .login-block__signup-btn,
  .login-block__decline-btn {
      border: unset;
      background-color: tomato;
      font-size: 1.15em;
      cursor: pointer;
      transition: 1s all ease;
  }

  .login-block__decline-btn:hover {
      color: #fff;
      box-shadow: 0 0 50px 50px rgba(31, 31, 31, 0.74) inset;
  }

  .login-block__signup-btn:hover {
      color: #fff;
      box-shadow: 0 0 50px 50px rgba(11, 212, 71, 0.74) inset;
  }

  .login-block__signup-btn {
      background-color: teal;
  }

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

  .modal-bom.hidden,
  .modal-github.hidden {
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

  .modal-github {
      display: grid;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid teal;

      grid-template-rows: repeat(2, 50px) 250px 50px;
      grid-template-columns: minmax(250px, 350px);
      height: 400px;
      align-items: center;
      justify-content: center;
  }

  .modal-github .top-row,
  .modal-github .input-row,
  .modal-github .result-row {
      margin: 0 7px;
  }

  .modal-github .top-row {
      text-align: center;
      font-size: 1.4em;
  }
  .modal-github .input-row {
      margin-top: 15px;
      align-self: start;
      display: grid;
      grid-template-columns: 1fr 100px;
      font-size: 1.4em;
  }

  .input-row .input-username,
  .input-row .input-find {
      width: 100%;
      height: 100%;
  }

  .input-username input {
      width: 95%;
      height: 100%;
      border: unset;
      border-bottom: 1px solid teal;
      outline: unset;
      padding: 0;
  }

  .input-find input {
      display: block;
      margin-left: auto;
      margin-right: 0;
      width: 100%;
      height: 100%;
      border: unset;
      padding: 0;
      cursor: pointer;
      background-color: tomato;
      color: #fff;
      border-radius: 2px;
  }
  .input-find input:hover {
      box-shadow: 0px 0px 25px 25px rgba(17, 17, 17, 0.2) inset;
  }


  .result-row {
      height: 100%;
      align-self: start;
  }
  .result-row ul {
      height: 170px;
      overflow-y: auto;
      position: relative;
  }
  .result-row ul li {
      margin: 15px;
      list-style: "✔️";
  }
  .repos-name,
  .repos-link,
  .copy-link {
      margin: 0 2px;
  }

  .repos-link {
      padding: 2px 5px;
      background-color: teal;
      color: #fff;
  }
  .repos-link:visited,
  .copy-link:visited {
      color: #fff;
  }

  .copy-link {
      padding: 2px 5px;
      background-color: tomato;
      color: #fff;
      transition: 0.2ms all ease;
      cursor: pointer;
  }
  .copy-link:active {
      background-color: teal;
  }




  /* loader */

  .lds-spinner {
      color: official;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
  }
  .lds-spinner.hidden {
      display: none;
  }
  .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: tomato;
  }
  .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
  }

  .repos-not-found {
      width: 125px;
      height: 25px;
      background-color: tomato;
      color: white;
      font-size: 1.2em;
      text-align: center;
      line-height: 1.2em;
  }

  .repos-not-found.hidden {
      display: none;
  }
  @keyframes lds-spinner {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }

  =======

  .bottom-row {
      justify-content: center;
  }

  .bottom-row button {
      display: block;
      margin: 0 auto;
      background-color: tomato;
      color: #fff;
      border: unset;
      border-radius: 2px;
      height: 100%;
      width: 150px;
      font-size: 1.2em;
      cursor: pointer;
  }

  .bottom-row button:hover {
      box-shadow: 0px 0px 25px 25px rgba(17, 17, 17, 0.2) inset;
  }

  @media screen and (max-width: 1280px) {
      .container {
          flex-flow: column nowrap;
      }

      .yellow-block {
          top: 0;
          left: 0;
          position: sticky;
          flex: 0 0 200px;
          height: 200px;
          order: 1;
          flex-flow: row nowrap;
          overflow-y: scroll;
          overflow-x: hidden;
          align-items: center;
      }

      .messages-list {
          height: 100%;
      }

      .messages-list__block-icon {
          margin-top: 2px;
          margin-bottom: 2px;
      }

      .small-block {
          display: flex;
          flex: 0 0 ;
          margin: 0 10px;
          min-width: 150px;
          height: 150px;
          background-color: tomato;
      }

      .main {
          flex: 1 1 100%;
          order: 2;
      }

      .green-and-pink {
          flex-flow: row wrap;
      }

      .green-block {
          flex: 1 0 100%;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
      }

      .item {
          flex: 0 0 100px;
      }
  }


  @media screen and (max-width: 930px) {
      .header__nav {
          position: absolute;
          top: 0;
          right: -100%;
          margin-top: 60px;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: tomato;
          padding: 15px 0;
          transition: 0.7s ease;
          z-index: 2;
      }

      .header__nav-item.js-features {
          background: unset;
      }
      .header__nav-item.js-features .new-badge {
          display: none;
      }

      .header__nav-item.sign-up {
          background: unset;
          background-size: unset;
      }
      .header__nav-item.sign-up::before {
          display: none;
      }

      .header__nav-item::before {
          display: none;
      }
      .header__nav.expanded {
          right: 0;
      }

      .header__nav-item {
          margin: 25px 0;
          text-align: center;
          font-size: 1.25em;
      }

      .header__nav-icon {
          display: block;
          margin-left: auto;
          margin-right: 0 ;
      }

      .header__nav-item::after {
          display: none;
      }

      .reply-block__select {
          flex-direction: column;
      }

      .reply-block__select {
          width: 130px;
      }
      .reply-block__custom-date {
          margin-bottom: 5px;
      }
      .reply-block__custom-date label {
          margin-right: 5px;
      }

  }
</style>

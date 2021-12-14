<template>
    <form @submit.prevent="signupHandler">
        <div class="login-block__signup-info">
            <h4>Sign up</h4>
        </div>
        <div class="login-block__username-block">
            <span class="login-block__username-label">Username</span>
            <input name="username" v-model="username" type="text" class="login-block__username-username" required>
        </div>
        <div class="login-block__details-block">
            <div class="login-block__sex-block">
                <span class="login-block__sex-label">Sex</span>
                <div class="login-block__sex-female">
                    <label for="input-female" class="login-block__female-label">F</label>
                    <input type="radio" v-model="sex" class="login-block__sex-female" name="sex" value="female" id="input-female">
                    <span class="radiomark"></span>
                </div>
                <div class="login-block__sex-male">
                    <label for="input-male" class="login-block__male-label">M</label>
                    <input type="radio" v-model="sex" class="login-block__sex-male" name="sex" value="male" id="input-male">
                    <span class="radiomark"></span>
                </div>
            </div>
            <div class="login-block__country-block">
                <span class="login-block__country-label">Country</span>
                <select name="country" v-model="country" class="login-block__country-select">
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Russia">Russia</option>
                    <option value="Germany">Deutschland</option>
                </select>
            </div>
        </div>
        <div class="login-block__email-block">
            <span class="login-block__email-label">E-mail</span>
            <input name="email" v-model="email" type="email" class="login-block__email-email" required>
        </div>
        <div class="login-block__password-block">
            <span class="login-block__password-label">Password</span>
            <input name="password" v-model="password" type="password" class="login-block__password-password" required>
        </div>
        <div class="login-block__phone-block">
            <span class="login-block__phone-label">Phone number</span>
            <input name="phone" v-model="phoneNumber" type="tel" class="login-block__phone-phone" required>
        </div>
        <div class="login-block__button-block">
            <input type="submit" value="Sign up" class="login-block__signup-btn">
            <input type="button" @click="declineClickHandler" value="Decline" class="login-block__decline-btn">
        </div>
    </form>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'sign-up-modal',
    setup(props, {emit}) {
        let store = useStore();
        let router = useRouter();

        let username = ref('');
        let sex = ref('');
        let country = ref('');
        let email = ref('');
        let password = ref('');
        let phoneNumber = ref('');
        const delay = 1500;

        let signUp = reactive({
            success: 'New account has been successfully created',
            type: 'successful'
        })

        function signupHandler() {
            localStorage.setItem('username', username)
            emit('signed-up', { 
                message: signUp.success,
                type: signUp.type
            })

            setTimeout(() => router.go(), delay)
        }
        function declineClickHandler() {
            store.commit('closeModal')
        }
        
        return {
            username,
            sex,
            country,
            email,
            password,
            phoneNumber,
            signUp,
            signupHandler,
            declineClickHandler
        }
    },
    // data: function() {
    //   return {
    //     username: '',
    //     sex: '',
    //     country: '',
    //     email: '',
    //     password: '',
    //     phoneNumber: '',
    //     signUp: {
    //         success: 'New account has been successfully created',
    //         type: 'successful'
    //     },
    //     delay: 2000
    //   }
    // },
    // methods: {
    //     declineClickHandler() {
    //         this.$store.commit('closeModal')
    //     },
    //     signupHandler() {
    //       localStorage.setItem('username', this.username)
    //       this.$emit('signed-up', { 
    //           message: this.signUp.success,
    //           type: this.signUp.type
    //        })

    //        setTimeout(() => this.$router.go(), this.delay)
    //     }
    // }
}
</script>

<style>
.login-block {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 500px;
      background-color: #fff;
      column-gap: 15px;
      display: grid;
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
</style>

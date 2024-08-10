<template>
  <div>
  </div>
  <div className="auth-form">
    <form @submit.prevent="login">
      <div className="form-data">
        <label>Username</label>
        <input type="text" v-model="username" />

        <label>Email</label>
        <input type="email" v-model="email" />

        <label>Password</label>
        <input type="password" v-model="password"/>

        <label>Confirm Password</label>
        <input type="password" v-model="confirmPassword"/>
      </div>
      <ul className="errorList">
          <li className="errorItem" v-if="!checkPasswordStrength(password) && password !== ''">
            Password is easy
          </li>
          <li className="errorItem" v-if="password !== confirmPassword">
            Passwords are differents
          </li>
        </ul>
      <div className="auth-func">
        <RouterLink to="/login">Login</RouterLink>
        <button type="submit">Register</button>
    </div>
    </form>
  </div>

</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter, RouterLink } from 'vue-router';

  import '@/assets/css/auth.css'
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref(''); 

  function checkPasswordStrength(password) {
  const lengthRequirement = /.{8,}/; // Минимум 8 символов
  const uppercaseRequirement = /[A-Z]/; // Как минимум одна заглавная буква
  const lowercaseRequirement = /[a-z]/; // Как минимум одна строчная буква
  const digitRequirement = /\d/; // Как минимум одна цифра

  const isLongEnough = lengthRequirement.test(password);
  const hasUppercase = uppercaseRequirement.test(password);
  const hasLowercase = lowercaseRequirement.test(password);
  const hasDigit = digitRequirement.test(password);

  return isLongEnough && hasUppercase && hasLowercase && hasDigit;
}

  const router = useRouter();
  
  const login = () => {
    // Пример получения токена (замените на реальный API запрос)
    const token = 'mockToken123';
    localStorage.setItem('token', token);
    router.push('/dashboard');
  };
</script>
  
<style scoped>
  a{
    font-size: 1.5em;
    display: inline-block;
    text-decoration: none;
    color: #41b883;
  }
  
  .errorList{
    list-style-type: none; 
    margin: 0 0 10px 0;
    padding: 0 0 0 5px;
  }

  .errorItem{
    margin: 0 0 5px 0;
    color: #cf1212;
    font-size: 1.1em;
  }
</style>
  
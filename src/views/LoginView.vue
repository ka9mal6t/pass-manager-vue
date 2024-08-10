<template>
  <div>
  </div>
  <div className="auth-form">
    <form @submit.prevent="login">
      <div className="form-data">
        <label>Username</label>
        <input type="text" v-model="username" />

        <label>Password</label>
        <input type="password" v-model="password"/>
      </div>
      <div className="auth-func">
        <router-link to="/register">Register</router-link>
        <button type="submit">Login</button>
        
      </div>
    </form>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  // Пример получения токена (замените на реальный API запрос)
  const token = 'mockToken123';
  localStorage.setItem('token', token);
  router.push('/dashboard');
};
</script>

<style scoped>

.auth-form{
  padding-top: 10%;
  display: flex;
  justify-content: center;
}

.form-data{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

form{
  padding: 10px;
  border: #606a70 2px solid;
  border-radius: 10px;
}

label{
  margin-bottom: 10px;
  font-size: 1.5em;
  text-align: left;
}

input {
  display: block;
  margin-bottom: 10px;
  font-size: 1.5em;
  border-radius: 5px;
  border: 2px solid;
  background-color: #ebeeee;
}

.auth-func{
  display: flex;
  justify-content: space-around;
}

button {
  width: 100px;
  display: inline-block;
  font-size: 1.5em;
  background-color: #41b883;
  color: #ffffff;
  border: none; 
  padding: 5px 5px;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
}

a{
  font-size: 1.5em;
  display: inline-block;
  color: #41b883;
}
</style>

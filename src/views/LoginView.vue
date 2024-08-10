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
        <RouterLink to="/register">Register</RouterLink>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>

</template>

<script setup>
  import { ref } from 'vue';
  import { RouterLink, useRouter} from 'vue-router'


  import '@/assets/css/auth.css'

  const username = ref('');
  const password = ref('');
  const router = useRouter();

  const login = () => {
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
</style>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>This is a protected dashboard page.</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
button {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
</style>

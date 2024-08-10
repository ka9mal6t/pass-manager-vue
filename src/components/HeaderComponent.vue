<template>
  <header>
    <RouterLink className="header-link" to="/home">
      <img className="header-logo" :src="logo"/>
    </RouterLink>
      <nav>
        <ul className="header-list">
          <li className="header-item"><RouterLink to="/">Profile</RouterLink></li>
          <li className="header-item"><RouterLink to="/">Search</RouterLink></li>
          <li className="header-item"><RouterLink to="/">Interesting</RouterLink></li>
          <li className="header-item"><RouterLink to="/">Create</RouterLink></li>
          <li className="header-item"><RouterLink to="/login">Log In</RouterLink></li>
        </ul>
      </nav>
    </header>
</template>

<script>
import logo from '@/assets/logo.svg'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      logo 
    };
  }
};
</script>

<style>
header{
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

nav{
  display: flex;
  flex: 1;
}

.header-logo{
  width: 100px;
  height: 100px;
}

.header-list{
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none; 
  margin: 0;             
  padding: 0;   
}

.header-item{
  font-size: 1.5em;
  padding-right: 20px;
}

a{
  display: inline-flex;
  color: #222224;
  text-decoration: none;
}

a:hover{
  color: #41b883;
  transition: all 0.4s ease;
}

.router-link-active{
  color: #41b883;
  position: relative;
  padding-bottom: 5px;
}

.router-link-active::before{
  content: '';
  position: absolute;     
  left: 0;              
  bottom: -10px;          
  width: 100%;      
  border: 2.5px solid #41b883;
  border-radius: 10px;
}

</style>
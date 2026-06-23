<template>
  <div class="app">
    <header class="hero">
      <div class="hero-content">
        <div class="hero-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="70" height="70" rx="8" stroke="white" stroke-width="5" fill="none"/>
              <path d="M62 28L72 38L42 68L32 68L32 58L62 28Z" fill="white"/>
              <path d="M32 68L28 76L40 64L32 68Z" fill="white"/>
            </svg>
          </div>
          
          <h1 class="logo-title">СБР</h1>
          
          <p class="logo-subtitle">Сервис бронирования<br>ресурсов</p>
        </div>
        
        <div class="hero-buttons">
          <button class="btn-hero">Вход</button>
          <button class="btn-hero">Регистрация</button>
        </div>
        
        <p class="hero-description">
          Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
        </p>
      </div>
    </header>

    <nav class="main-nav">
      <div class="nav-container">
        <div class="nav-left">
          <svg class="nav-edit-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </div>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link" active-class="active">Аппаратура</router-link>
          <router-link to="/people" class="nav-link" active-class="active">Люди</router-link>
          <router-link to="/" class="nav-link" active-class="active">Пространство</router-link>
          <router-link to="/" class="nav-link" active-class="active">Профиль</router-link>
        </div>
        
        <ProfileMenu />
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import ProfileMenu from './components/ProfileMenu.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: #f5f5f5;
}

.hero {
  position: relative;
  height: 400px;
  background: url('/999/images/hero-bg.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 20px;
}

.hero-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.logo-title {
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  letter-spacing: 2px;
  flex-shrink: 0;
}

.logo-subtitle {
  font-size: 15px;
  margin: 0;
  opacity: 0.95;
  line-height: 1.3;
  text-align: left;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.btn-hero {
  padding: 12px 32px;
  background: white;
  color: #333;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-hero:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.hero-description {
  font-size: 14px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

.main-nav {
  background: rgba(27, 36, 39, 0.85);
  padding: 16px 0;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-edit-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.nav-link:hover,
.nav-link.active {
  opacity: 1;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}
</style>
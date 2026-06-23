<template>
  <div class="profile-menu">
    <div class="avatar-btn" @click="toggleMenu">
      <img src="/images/avatar.jpg" alt="Профиль" class="avatar-img">
    </div>
    
    <Transition name="fade">
      <div class="dropdown-content" v-if="isOpen">
        <div class="profile-header">
          <span class="profile-name">Иван Иванов</span>
          <svg class="settings-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
        <div class="profile-email">example@yandex.ru</div>
        <button class="btn-logout" @click="logout">Выход</button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = (event) => {
  if (!event.target.closest('.profile-menu')) {
    isOpen.value = false
  }
}

const logout = () => {
  alert('Выход из системы')
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<style scoped>
.profile-menu {
  position: relative;
  display: inline-block;
}

.avatar-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: transparent; /* Прозрачный фон */
  border: 2px solid rgba(255, 255, 255, 0.3); /* Белая рамка */
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-btn:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05); /* Легкая подсветка */
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  width: 250px;
  z-index: 9999;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #E8E8E8;
}

.profile-name {
  font-size: 16px;
  font-weight: 600;
  color: #1A1A1A;
}

.settings-icon {
  width: 20px;
  height: 20px;
  color: #666;
  cursor: pointer;
}

.settings-icon:hover {
  color: #43716B;
}

.profile-email {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.btn-logout {
  width: 100%;
  padding: 12px;
  background: #43716B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-logout:hover {
  background: #355953;
}

/* Анимация появления */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
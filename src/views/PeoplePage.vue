<template>
  <div class="page-layout">

    <div class="main-column">

      <div class="toolbar">
        <div class="search-box">
          <input type="text" placeholder="Поиск" class="search-input">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21L16.65 16.65"/>
          </svg>
        </div>
        
        <div class="filter-box">
          <select class="filter-select">
            <option>По рейтингу</option>
          </select>
          <button class="btn-add">
  <span>Добавить</span>
  <span class="btn-add-icon">+</span>
</button>
        </div>
      </div>


      <div class="people-grid">

        <div class="people-column">
          <div class="person-card" v-for="(person, idx) in ivanList" :key="'ivan-' + idx">
            <div class="person-image-wrapper">
              <img :src="person.image" :alt="person.name" class="person-image">
              <span class="role-badge">Фотограф</span>
            </div>
            <div class="person-content">
              <h3 class="person-name">{{ person.name }}</h3>
              <p class="person-description">{{ person.description }}</p>
              <div class="person-actions">
                <button class="btn-invite" @click="invitePerson(idx)">Пригласить</button>
                <button class="btn-detail" @click="detailPerson(idx)">Подробнее</button>
              </div>
            </div>
          </div>
        </div>


        <div class="people-column">
          <div class="person-card" v-for="(person, idx) in anastasiaList" :key="'anastasia-' + idx">
            <div class="person-image-wrapper">
              <img :src="person.image" :alt="person.name" class="person-image">
              <span class="role-badge">Фотограф</span>
            </div>
            <div class="person-content">
              <h3 class="person-name">{{ person.name }}</h3>
              <p class="person-description">{{ person.description }}</p>
              <div class="person-actions">
                <button class="btn-invite" @click="invitePerson(idx + 4)">Пригласить</button>
                <button class="btn-detail" @click="detailPerson(idx + 4)">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="sidebar-column">
<!-- Календарь -->
<div class="calendar-card">
  <h3 class="section-title">Декабрь 2023</h3>
  <div class="calendar">
    <div class="calendar-weekdays">
      <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span>
      <span class="weekend">Сб</span><span class="weekend">Вс</span>
    </div>
    <div class="calendar-days">

      <span class="prev-month">27</span>
      <span class="prev-month">28</span>
      <span class="prev-month">29</span>
      <span class="prev-month">30</span>
      

      <span>1</span><span>2</span><span class="weekend">3</span>
      <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
      <span class="weekend">9</span><span class="weekend">10</span>
      <span>11</span><span>12</span>
      <span class="today">13</span>
      <span>14</span><span>15</span>
      <span class="weekend">16</span><span class="weekend">17</span>
      <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
      <span class="weekend">23</span><span class="weekend">24</span>
      <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
      <span class="weekend">30</span><span class="weekend">31</span>
      

      <span class="next-month">1</span><span class="next-month">2</span>
      <span class="next-month">3</span><span class="next-month">4</span>
      <span class="next-month">5</span>
      <span class="next-month weekend">6</span>
      <span class="next-month weekend">7</span>
    </div>
  </div>
</div>

<div class="invitations-card">
  <h3 class="section-title">Автивные приглашения</h3>
  <div class="invitation-item" v-for="(inv, idx) in invitations" :key="idx">
    <h4 class="inv-title">{{ inv.title }}</h4>
    <div class="inv-badges-row">
      <span class="inv-badge">{{ inv.time }}</span>
      <span class="inv-badge">{{ inv.person }}</span>
      <span class="inv-badge">{{ inv.role }}</span>
    </div>
    <div class="inv-actions">
      <button class="btn-inv-primary" @click="showInviteDetail(idx)">Подробнее</button>
      <button class="btn-inv-secondary" @click="openInvite(idx)">Отклонить</button>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const calendarDays = [
  27, 28, 29, 30, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31
]

const invitations = [
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' },
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' }
]

const people = [
  { 
    name: 'Иван Иванов', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person1.jpg'
  },
  { 
    name: 'Иван Иванов', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person1.jpg'
  },
  { 
    name: 'Иван Иванов', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person1.jpg'
  },
  { 
    name: 'Иван Иванов', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person1.jpg'
  },
  { 
    name: 'Анастасия Ремогузина', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person2.jpg'
  },
  { 
    name: 'Анастасия Ремогузина', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person2.jpg'
  },
  { 
    name: 'Анастасия Ремогузина', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person2.jpg'
  },
  { 
    name: 'Анастасия Ремогузина', 
    description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...',
    image: '/999/images/person2.jpg'
  }
]

const ivanList = computed(() => people.filter(p => p.name === 'Иван Иванов'))
const anastasiaList = computed(() => people.filter(p => p.name === 'Анастасия Ремогузина'))

const isWeekend = (day) => {
  const dayOfWeek = (day + 4) % 7
  return dayOfWeek === 5 || dayOfWeek === 6
}

const showInviteDetail = (idx) => alert(`Подробнее о приглашении #${idx + 1}`)
const openInvite = (idx) => alert(`Открыть приглашение #${idx + 1}`)
const invitePerson = (idx) => alert(`Пригласить ${people[idx].name}`)
const detailPerson = (idx) => alert(`Подробнее о ${people[idx].name}`)
</script>

<style scoped>
.page-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
}

.main-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  background: white;
}

.search-input:focus {
  border-color: #2d5a4a;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #999;
}

.filter-box {
  display: flex;
  gap: 10px;
  align-items: center;
}

.filter-select {
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  background: white;
}

.btn-add {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #F5F5F5;
  color: #333333;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-add:hover {
  background: #E8E8E8;
  border-color: #D0D0D0;
}

.btn-add-icon {
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
}

.people-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.people-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.person-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
  align-items: flex-start;
}

.person-image-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}

.person-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.role-badge {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(255, 255, 255, 0.9); 
  color: #2D5A4A; 
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  backdrop-filter: blur(4px); 
}

.person-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.person-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.person-description {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 15px 0;
  flex: 1;
}

.person-actions {
  display: flex;
  gap: 10px;
}

.btn-invite {
  flex: 1;
  padding: 10px;
  background: #43716B;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-invite:hover {
  background: #43716B;
}

.btn-detail {
  flex: 1;
  padding: 10px;
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-detail:hover {
  background: #f5f5f5;
}

.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.calendar-card,
.invitations-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.calendar-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.calendar-nav {
  display: flex;
  gap: 5px;
}

.calendar-btn {
  width: 28px;
  height: 28px;
  background: #f5f5f5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: background 0.3s;
}

.calendar-btn:hover {
  background: #e0e0e0;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 10px;
  text-align: center;
}

.calendar-weekdays span {
  font-size: 12px;
  color: #999;
  font-weight: 500;
}

.calendar-weekdays .weekend {
  color: #d32f2f;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
}

.calendar-days span {
  padding: 8px;
  font-size: 13px;
  color: #333;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.calendar-days span:hover:not(.empty) {
  background: #f5f5f5;
}

.calendar-days .weekend {
  color: #d32f2f;
}

.calendar-days .today {
  background: #43716B;
  color: white;
  font-weight: 600;
}

.calendar-days .empty {
  cursor: default;
}

.invitations-card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0 0 24px 0;
}

.invitation-item {
  background: #F0F0F0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.invitation-item:last-child {
  margin-bottom: 0;
}

.inv-title {
  font-size: 16px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0 0 16px 0;
}

.inv-badges-row {
  display: flex;
  flex-wrap: nowrap; 
  gap: 8px;          
  margin-bottom: 16px;
  align-items: center;
}

.inv-badge {
  background: #86AEAA;
  color: #FFFFFF;
  padding: 6px 12px; 
  border-radius: 8px;
  font-size: 12px;   
  font-weight: 500;
  white-space: nowrap; 
  flex-shrink: 0;     
}

.inv-actions {
  display: flex;
  gap: 10px;
}

.btn-inv-primary {
  flex: 1;
  padding: 12px 20px;
  background: #43716B;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-inv-primary:hover {
  background: #355953;
}

.btn-inv-secondary {
  flex: 1;
  padding: 12px 20px;
  background: #FFFFFF;
  color: #333333;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-inv-secondary:hover {
  background: #86AEAA5;
}

@media (max-width: 1100px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar-column {
    order: -1;
  }
  
  .people-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .toolbar {
    flex-direction: column;
  }
  
  .search-box {
    max-width: 100%;
  }
  
  .person-card {
    flex-direction: column;
  }
  
  .person-image-wrapper {
    width: 100%;
    height: 200px;
  }
}
</style>
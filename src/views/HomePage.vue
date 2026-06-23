<template>
  <div class="page-layout">

    <div class="main-column">
      <div class="space-card" v-for="(space, idx) in spaces" :key="idx">
        <div class="space-image-wrapper">
          <img :src="space.image" :alt="space.title" class="space-image">
          <div class="space-badges">
            <span class="badge">Фото</span>
            <span class="badge">Информация</span>
          </div>
          <h2 class="space-title-overlay">{{ space.title }}</h2>
        </div>
        
        <div class="space-content">

          <div class="booking-row">

            <div class="time-slots-left">
              <button 
                class="time-slot" 
                v-for="time in timeSlots" 
                :key="time"
                :class="{ booked: isBooked(idx, time) }"
              >
                {{ time }}
              </button>
            </div>
            

            <div class="actions-right">
              <button class="btn-book-grid" @click="$router.push('/booking')">Забронировать</button>
              <button class="btn-detail-grid" @click="showDetail">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="sidebar-column">
      <!-- Календарь -->
      <div class="calendar-card">
        <div class="calendar-header">
          <h3 class="section-title">Декабрь 2023</h3>
          <div class="calendar-nav">
            <button class="nav-btn">›</button>
            <button class="nav-btn">‹</button>
            <button class="nav-btn">›</button>
          </div>
        </div>
        <div class="calendar">
          <div class="calendar-weekdays">
            <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span>
            <span class="weekend-header">Сб</span><span class="weekend-header">Вс</span>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const timeSlots = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
]

const invitations = [
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' },
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' }
]

const spaces = [
  { 
    title: 'Коворкинг ИРНИТУ',
    image: '/999/images/coworking.jpg'
  },
  { 
    title: 'Переговорная ИРНИТУ',
    image: '/999/images/pereg.jpg?v=1'
  }
]

const isBooked = (spaceIdx, time) => {
  const bookedSlots = ['10:00 - 11:00', '11:00 - 12:00', '13:00 - 14:00']
  return bookedSlots.includes(time)
}

const showDetail = () => alert('Подробнее')
const showInviteDetail = (idx) => alert(`Подробнее о приглашении #${idx + 1}`)
const openInvite = (idx) => alert(`Открыть приглашение #${idx + 1}`)
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
  gap: 30px;
}


.space-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #E8E8E8;
}

.space-image-wrapper {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.space-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.space-badges {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
}

.badge {
  background: #FFFFFF;
  color: #1A1A1A;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.space-title-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.space-content {
  padding: 24px;
}


.booking-row {
  display: flex;
  gap: 16px;
  align-items: stretch;
}


.time-slots-left {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.time-slot {
  padding: 14px 8px;
  background: #F5F5F5;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  font-size: 13px;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  white-space: nowrap;
}

.time-slot:hover {
  background: #E8EDEB;
  border-color: #2D5A4A;
}

.time-slot.booked {
  background: #86AEAA;
  color: #FFFFFF;
  border-color: ##86AEAA;
}


.actions-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 180px;
}

.btn-book-grid {
  flex: 1;
  padding: 14px;
  background: #43716B;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;
}

.btn-book-grid:hover {
  background: #355953;
}

.btn-detail-grid {
  flex: 1;
  padding: 14px;
  background: #FFFFFF;
  color: #43716B;
  border: 1.5px solid #43716B;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.btn-detail-grid:hover {
  background: #43716B;
  color: #FFFFFF;
}


.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}


.calendar-card {
  background: #F5F5F5;
  border-radius: 12px;
  padding: 24px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
}

.calendar-nav {
  display: flex;
  gap: 8px;
}

.nav-btn {
  width: 32px;
  height: 32px;
  background: #E8E8E8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: #D0D0D0;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 12px;
  text-align: center;
}

.calendar-weekdays span {
  font-size: 13px;
  color: #666666;
  font-weight: 500;
}

.calendar-weekdays .weekend-header {
  color: #2D5A4A;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  text-align: center;
}

.calendar-days span {
  width: 36px;
  height: 36px;
  line-height: 36px;
  margin: 0 auto;
  font-size: 14px;
  color: #333333;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

.calendar-days .weekend {
  color: #D32F2F;
}

.calendar-days .today {
  background: #43716B;
  color: #FFFFFF;
  font-weight: 600;
}

.calendar-days .prev-month,
.calendar-days .next-month {
  color: #BDBDBD;
}

.calendar-days .next-month.weekend,
.calendar-days .prev-month.weekend {
  color: #E57373;
}

.calendar-days span:hover:not(.today) {
  background: #E8E8E8;
}


.invitations-card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
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
  background: #F5F5F5;
}


@media (max-width: 968px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar-column {
    order: -1;
  }
  
  .booking-row {
    flex-direction: column;
  }
  
  .time-slots-left {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .actions-right {
    flex-direction: row;
    min-width: auto;
  }
}
</style>
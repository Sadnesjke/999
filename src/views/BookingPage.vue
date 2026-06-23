<template>
  <div class="page-container">
    <div class="form-card">
      <h2 class="page-title">Бронирование</h2>
      
      <form @submit.prevent="handleSubmit">

        <div class="form-group">
          <label class="form-label">Мероприятие</label>
          <select class="form-select" v-model="form.event">
            <option value="">Выберите мероприятие</option>
            <option value="совещание">Совещание</option>
            <option value="презентация">Презентация</option>
            <option value="тренинг">Тренинг</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Выберите время мероприятия</label>
          <div class="time-grid">
            <button 
              type="button" 
              class="time-slot" 
              :class="{ 
                active: selectedTime === time,
                booked: isBooked(time)
              }" 
              v-for="time in timeSlots" 
              :key="time" 
              @click="selectedTime = time"
            >
              {{ time }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Ответственные лица</label>
          <div class="responsibles-container">
            <div class="responsible-tag" v-for="(person, idx) in form.responsibles" :key="idx">
              {{ person.name }}
              <button type="button" class="tag-remove" @click="removeResponsible(idx)">×</button>
            </div>
            <button type="button" class="tag-add" @click="addResponsible">+</button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Дополнительная информация</label>
          <textarea 
            class="form-textarea" 
            rows="3" 
            placeholder="Добавить комментарий" 
            v-model="form.comment"
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-primary">Забронировать</button>
          <button type="button" class="btn-secondary" @click="$router.push('/')">Отмена</button>
        </div>
      </form>
    </div>

    <div class="modal" :class="{ show: modalVisible }" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">Ошибка</h3>
        <p class="modal-text">Неверный запрос. Обратитесь в техподдержку</p>
        <button class="btn-primary modal-btn" @click="closeModal">Принять</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const timeSlots = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
]

const bookedSlots = ['10:00 - 11:00', '11:00 - 12:00', '13:00 - 14:00']

const isBooked = (time) => {
  return bookedSlots.includes(time)
}

const form = reactive({
  event: '',
  responsibles: [
    { name: 'Иван Иванов' },
    { name: 'Елена Иванова' }
  ],
  comment: ''
})

const selectedTime = ref(null)
const modalVisible = ref(false)

const addResponsible = () => {
  alert('Выбор ответственного лица')
}

const removeResponsible = (idx) => {
  form.responsibles.splice(idx, 1)
}

const handleSubmit = () => {
  modalVisible.value = true
}

const closeModal = () => {
  modalVisible.value = false
}
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
}

.form-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 30px 0;
}

.form-group {
  margin-bottom: 30px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-bottom: 12px;
}

.form-select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s;
}

.form-select:focus {
  outline: none;
  border-color: #1B4D3E;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.time-slot {
  padding: 14px;
  background: #E8EDEB;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.time-slot:hover {
  background: #D5DDD9;
}


.time-slot.active {
  background: #43716B;
  color: #FFFFFF;
  font-weight: 600;
}


.time-slot.booked {
  background: #86AEAA;
  color: #FFFFFF;
  font-weight: 600;
}

.time-slot.booked.active {
  background: #43716B;
}

.responsibles-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.responsible-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #355953;
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.tag-remove {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.tag-remove:hover {
  opacity: 0.7;
}

.tag-add {
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  font-size: 28px;
  color: #1B4D3E;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  line-height: 1;
}

.tag-add:hover {
  background: #E8EDEB;
  border-radius: 8px;
}

.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s;
}

.form-textarea:focus {
  outline: none;
  border-color: #1B4D3E;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 40px;
}

.btn-primary {
  flex: 1;
  padding: 16px;
  background: #43716B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #355953;
}

.btn-secondary {
  flex: 1;
  padding: 16px;
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.modal.show {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 40px;
  max-width: 480px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
}

.modal-text {
  font-size: 15px;
  color: #666;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.modal-btn {
  width: 100%;
}
</style>
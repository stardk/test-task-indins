<template>
  <div class="modal">
    <p>Телефон</p>
    <input type="text" v-model="phoneNumber" @input="checkInput">
    <button @click="$emit('finish', phoneNumber)">Закончить</button>
  </div>
</template>

<script>
  export default {
      name: 'modal',
      data () {
        return {
          phoneNumber: null
        }
      },
      methods: {
        checkInput () {
          this.phoneNumber = this.phoneNumber.replace(/[^0-9\+]/g, '');
        }
      }
  }
</script>

<style scoped>
.modal {
  background-color: #ffffff;
  position: absolute;
  padding: 20px;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  z-index: 99;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
}
</style>
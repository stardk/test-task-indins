<template>
  <div class="info">
    <transition name="fade" mode="out-in">
      <button v-if="showElement.button" key="button" @click="showForm">Далее</button>
      <input type="text" v-if="showElement.firstInput" autofocus placeholder="Фамилия" @input="inputLastName" v-model="lastName" key="lName">
      <input type="text" v-if="showElement.secondInput" placeholder="Имя" @input="inputFirstName" v-model="firstName" key="fName">
    </transition>
    <modal v-if="showElement.modal" @finish="finish($event)"/>
    <div v-if="showElement.modal" class="info__modal-overlay"></div>
  </div>
</template>

<script>
import modal from '../components/modal.vue';

export default {
  components: {
    modal
  },
  data () {
    return {
      debounce: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
      showElement: {
        button: true,
        firstInput: false,
        secondInput: false,
        modal: false
      }
    }
  },
  methods: {
    showForm () {
      this.showElement.firstInput = true;
      this.showElement.button = false;
    },
    inputLastName (event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.showElement.secondInput = true;
        this.showElement.firstInput = false;
      }, 1000);
    },
    inputFirstName (event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.showElement.modal = true;
      }, 1000);
    },
    finish (phoneValue) {
      this.phoneNumber = phoneValue;
      this.$router.push({ name: 'third', params: { firstName: this.firstName, lastName: this.lastName, phoneNumber: this.phoneNumber } });
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.info__modal-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000;
  opacity: .4;
  z-index: 10;
}
</style>
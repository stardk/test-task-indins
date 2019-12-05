<template>
  <div class="sum">
    <input type="text" placeholder="Первое число" name="firstNumber" @input="inputFirstNumber" v-model="numbers[0]">
    <input type="text" placeholder="Второе число" name="secondNumber" @input="checkInput" v-if="enteredFirst" v-model="numbers[1]">
    <p v-if="numbers[1]">
      {{ numbers[0] + '+' + numbers[1] + '=' + sum()}}
    </p>
    <nuxt-link to="/second">Вторая страница</nuxt-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        enteredFirst: false,
        debounce: null,
        numbers: []
      }
    },
    methods: {
      inputFirstNumber (event) {
        this.checkInput();
        if (this.numbers[0] != '') {
          clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
            this.enteredFirst = true;
          }, 1000);
        }
      },
      checkInput () {
        this.numbers = this.numbers.map((item) => {
          item = item.replace(/[^0-9\.\/]/g, '');
          return item;
        })
      },
      sum () {
        let regExp = /\d+\/\d+/;
        let sumNumbers = this.numbers.map((item) => {
          if (regExp.test(item)) {
            let parts = item.split('/');
            return parseInt(parts[0]) / parseInt(parts[1]);
          }
          else return parseFloat(item);
        })
        if (isNaN(sumNumbers[0] + sumNumbers[1])) return 'Ошибка'
        else return sumNumbers[0] + sumNumbers[1];
      }
    }
  }
</script>

<style scoped>
.sum {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  margin-bottom: 5px;
}
</style>
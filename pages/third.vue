<template>
  <div class="result">
    <p>Имя: {{ info.firstName }}</p>
    <p>Фамилия: {{ info.lastName }}</p>
    <p>Телефон: {{ info.phoneNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  beforeMount () {
    this.info = this.$route.params;
  }
}
</script>

<style scoped>

</style>
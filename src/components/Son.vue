<template>
  <div>
    <div class="son_wrapper">
      <img src="@/assets/stewie.png" alt="STEWIE"/>
      <div>
        <h2>Hi,My name is Stewie!</h2>
        <h3>My accounts: {{ account }}$</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      account: 1
    }
  }
}
</script>

<style scoped>
.son_wrapper {
  background: aqua;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 20px;
  justify-content: center;
}
.son_wrapper > img{
  height: 200px;
}
</style>
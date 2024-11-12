<template>
  <div class="son wrapper">
    <img src="@/assets/stewie.png" alt="STEWIE"/>
    <div>
      <h1>Hi,My name is Stewie!</h1>
      <h2>My accounts: {{ sonAccount }}$</h2>
      <button @click="giveMoneyToFather">Give money to Peter</button>
      <button class="red" @click="buySomething">Buy something</button>
    </div>
  </div>
</template>

<script lang="ts">
import StewieConfusedSound from "@/assets/StewieConfusedSound.mp3"
export default {
  props: ["sonAccount"],
  data() {
    return {
      account: this.sonAccount,
      volumeV:0.05
    }
  },
  methods: {
    giveMoneyToFather() {
      // 2是子组件传给父组件的值，不是直接传递，而是在方法中以参数形式传递
      this.$emit("sonGiveMoneyToFather", 2);
    },
    buySomething(){
      const stewieConfused = new Audio(StewieConfusedSound);
      stewieConfused.volume = this.volumeV;
      stewieConfused.play();
      this.sonAccount --;
    }
  }
}
</script>

<style scoped>
.son {
  background: #6e146c;
}
.red {
  background: red;
  color: white;
}

</style>
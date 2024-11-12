<template>
  <div class="father wrapper">
    <img src="@/assets/peter.png" alt="PETER"/>
    <div>
      <h1>Hi,My name is PETER!</h1>
      <h2>My accounts: {{ account }}$</h2>
      <button @click="giveMoneyToSon">Give money to Stewie</button>
    </div>
  </div>
  <Son
      :son-account="sonAccount"
      @sonGiveMoneyToFather="getMoneyFromSon"
  ></Son>
</template>

<script lang="ts">
import Son from "@/components/Son.vue";
import PeterLaughSound from "@/assets/PeterLaugh.mp3"
import PeterSadSound from "@/assets/PeterSad.mp3"
import StewieAngrySound from "@/assets/StewieAngry.mp3"
import StewieHappySound from "@/assets/StewieHappy.mp3"

export default {
  components: {Son},
  data() {
    return {
      account: 100,
      sonAccount: 2,
      volumeV:0.05
    }
  },
  methods: {
    giveMoneyToSon() {
      this.account--;
      this.sonAccount++;

      const peterSad = new Audio(PeterSadSound);
      peterSad.volume = this.volumeV;
      peterSad.play();
      window.setTimeout(() => {
        const StewieHappy = new Audio(StewieHappySound);
        StewieHappy.volume = this.volumeV;
        StewieHappy.play();
      }, 1000);
    },
    getMoneyFromSon(value) {
      this.account += value;
      this.sonAccount -= value;
      const peterLaugh = new Audio(PeterLaughSound);
      peterLaugh.volume = this.volumeV;
      peterLaugh.play();
      window.setTimeout(() => {
        const stewieAngry = new Audio(StewieAngrySound);
        stewieAngry.volume = this.volumeV;
        stewieAngry.play();
      }, 1000);
    }
  }
}
</script>

<style scoped>
.father {
  background: #035252;
}

</style>
<script setup lang="ts">
import Father from "@/components/Father.vue";
</script>

<template>
<Father></Father>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 20px;
  color: white;
}
.wrapper > img{
  height: 200px;
}
button{
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
</style>

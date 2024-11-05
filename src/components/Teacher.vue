<template>
  <div>
    <p>This teacher is {{ teacher.name }}. His salary is {{ teacher.salary }}</p>
    <button @click="changeSalary" style="background: aqua">changeSalary {{ teacher.name }}</button>
    <button @click="changeToBrain">Change To Brain</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';

let teacher = ref({name: "Lois", salary: 5000});
watch(teacher, (newValue, oldValue) => {
  console.log("Watch triggered!")
  console.log(newValue, oldValue);
})
// Only if {deep:true} is added, then changeSalary() will trigger watch;
// Whether {deep:true} is added or not, changeToBrain() always trigger watch;
function changeSalary(){
  teacher.value.salary = Math.floor(Math.random() * 10000);
}
function changeToBrain() {
  teacher.value = {name:"Brain", salary: Math.floor(Math.random() * 10000)};
}
</script>

<style>

</style>
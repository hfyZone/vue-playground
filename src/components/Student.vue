<template>
  <div>
    <p>This Student is {{ student.name }}. His score is {{ student.salary }}</p>
    <button @click="test">Test {{student.name}}</button>
    <button @click="changeToStewie" style="background: lightcoral">Change To Stewie</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, watch} from 'vue';

let student = reactive({name: "Jon", salary: 100});
watch(student, (newValue, oldValue) => {
  console.log("Watch triggered!",newValue, oldValue);
})
function test(){
  student.salary = Math.floor(Math.random() * 100) + 1;
}
function changeToStewie() {
  student = {name:"Stewie", salary: 0};
}
</script>

<style>

</style>
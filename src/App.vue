<script lang="ts" setup>
  import { ref } from 'vue';
  import TaskForm from './components/TaskForm.vue';
  const message = ref("TASKs APP")
</script>

<template>
  <main>
    <h1>{{message}}</h1>
    <TaskForm />
    </main>
</template>

<style>
main {
  max-width: 800px;
  margin: 1rem auto;
}
.button-container {
  display: flex;
  justify-content: end;
}
</style>
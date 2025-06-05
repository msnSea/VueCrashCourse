<script lang="ts" setup>
  import { ref } from 'vue';
  import TaskForm from './components/TaskForm.vue';
  import FilterButton from './components/FilterButton.vue';
  const message = ref("TASKs APP")
</script>

<template>
  <main>
    <h1>{{message}}</h1>
    <TaskForm />
    <div class="button-container">
      <FilterButton filter="all" />
      <FilterButton filter="active" />
      <FilterButton filter="completed" />
    </div>
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
  gap: 0.5rem;
}
</style>
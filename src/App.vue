<script lang="ts" setup>
  /*
Copyright (c) 2025 Mohsen Siaghi.  
Licensed under the My License.
You may not use this file except in compliance with the License.
  */

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
  margin-bottom: 1rem;
}
</style>
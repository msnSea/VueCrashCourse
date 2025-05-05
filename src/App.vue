<script lang="ts" setup>
  import { ref } from 'vue';
  const message = ref("TASKs APP")
  const tempValueHolder = ref("");
  function formSubmitted() {
    console.log(tempValueHolder.value);
  }
</script>

<template>
  <main>
    <h1>{{message}}</h1>
    <form @submit.prevent="formSubmitted">
        <label>
          new TASK
          <input v-model="tempValueHolder" name="tempValueHolder">
        </label>
        <div class="button-container">
          <button>Add</button>
        </div>
      </form>
    </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
.button-container {
  display: flex;
  justify-content: end;
}
</style>
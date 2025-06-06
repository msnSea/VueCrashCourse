<script lang="ts" setup>
    import type { Task } from './types';
    const props = defineProps<{
        tasks: Task[]
    }>();
</script>

<template>
    <div class="task-list">
        <article v-for="task in props.tasks" :key="task.id">
            <label>
                 <input type="checkbox">
                {{ task.title }}
            </label>
        </article>
    </div>
</template>

<style scoped>
    .task-list {
    margin-top: 1rem;
    }
</style>
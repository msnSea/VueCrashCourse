<script lang="ts" setup>
    import type { taskFilter } from "./types";
    
    const props = defineProps<{
        filter: taskFilter;
    }>();

    const emits = defineEmits<{
        setFilter: [filter: taskFilter]
    }>();
</script>

<template>
    <button
        class="secondary"
        @click="emits('setFilter', props.filter)"
    >
        {{ props.filter }}
    </button>
</template>

<style scoped>
button {
    text-transform: capitalize;
}
</style>

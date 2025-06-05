<script lang="ts" setup>
    import type { taskFilter } from "./types";
    
    const props = defineProps<{
        filter: taskFilter;
    }>();
</script>

<template>
    <button
        class="secondary"
    >
        {{ props.filter }}
    </button>
</template>
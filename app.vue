<script lang="ts" setup>
const { data: todos, pending, error, refresh } = await useFetch('/api/todos')
const statusText = (isCompleted: boolean) => (isCompleted ? 'Yes' : 'No')
</script>
<template>
    <div>
        <NuxtPage />
    </div>
</template>
<style lang="scss" scoped></style>

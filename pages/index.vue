<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
})
const { data: todos, pending, error, refresh } = await useFetch('/api/todos')
const statusText = (isCompleted: boolean) => (isCompleted ? 'Yes' : 'No')
const { logout } = useAuth()
</script>
<template>
    <div>
        <button @click="logout">log out</button>
    </div>
    <div class="todo-table">
        <div>ID</div>
        <div>Name</div>
        <div>Completed</div>
        <div>Created</div>
        <template v-for="todo in todos">
            <div>{{ todo.id }}</div>
            <div>{{ todo.name }}</div>
            <div>{{ statusText(todo.completed) }}</div>
            <div>{{ todo.created_at }}</div>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.todo-table {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 4px;

    > div {
    }
}
</style>

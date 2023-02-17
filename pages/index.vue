<script lang="ts" setup>
const { data: todos, pending, error, refresh } = await useFetch('/api/todos')
const statusText = (isCompleted: boolean) => (isCompleted ? 'Yes' : 'No')
</script>
<template>
    <NuxtLink to="/signup">sign up </NuxtLink>
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

    <!-- <div>
        <label>
            <span> todo name: </span>
            <input type="text" v-model="todoName" />
            <button @click="addTodo">Add</button>
        </label>
    </div> -->
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

<script lang="ts" setup>
definePageMeta({
    middleware: ['unauth'],
})
const { email, password, login } = useAuth()
</script>
<template>
    <div>
        <div>
            <label>
                <span>Email</span>
                <input type="text" v-model="email" />
            </label>
        </div>
        <div>
            <label>
                <span>Password</span>
                <input type="password" v-model="password" />
            </label>
        </div>
        <div>
            <button @click="login">Login</button>
        </div>
        <div>
            <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>

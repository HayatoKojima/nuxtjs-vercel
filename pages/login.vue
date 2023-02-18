<script lang="ts" setup>
const { email, password, login } = useAuth()
const auth = async () => {
    const data = await $fetch('/api/auth')
    console.log(data)
}
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
            <button @click="auth">auth</button>
        </div>
        <div>
            <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>

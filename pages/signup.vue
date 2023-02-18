<script lang="ts" setup>
const { email, password, signUp } = useAuth()
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
            <button @click="signUp">Sign Up</button>
        </div>
        <div>
            <NuxtLink to="/login">Login</NuxtLink>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>

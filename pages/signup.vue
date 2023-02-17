<script lang="ts" setup>
const email = ref('')
const password = ref('')

const signUp = async () => {
    const { data, pending, error, refresh } = await useFetch('/api/signup', {
        method: 'POST',
        body: {
            email: email.value,
            password: password.value,
        },
    })
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
            <button @click="signUp">Sign Up</button>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>

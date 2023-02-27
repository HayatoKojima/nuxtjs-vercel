export default defineNuxtRouteMiddleware(async (to, from) => {
    const accessToken = useCookie('todo-app-access-token')
    if (accessToken.value === null) return false
    const user = await $fetch('/api/auth', {
        method: 'POST',
        body: {
            jwt: accessToken.value,
        },
    })
    if (user) return navigateTo('/')
})
// majiko2627kojima@gmail.com

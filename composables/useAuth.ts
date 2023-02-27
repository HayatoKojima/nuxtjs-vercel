export const useAuth = () => {
    const email = ref('')
    const password = ref('')

    const signUp = async () => {
        await useFetch('/api/signup', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
            },
        })
    }
    const login = async () => {
        const { data, error } = await $fetch('/api/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
            },
        })

        if (error === null) {
            // ログインに成功するとアクセストークンが返ってくるのでCookieに格納
            useCookie<string>('todo-app-access-token').value = data.session!.access_token
            navigateTo('/')
        }
    }
    const logout = () => {
        // アクセストークンを削除してログインページに戻る
        const accessToken = useCookie('todo-app-access-token')
        accessToken.value = null
        navigateTo('/login')
    }

    return { email, password, signUp, login, logout }
}

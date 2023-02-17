import supabase from '@/utils/supabase'

export default defineEventHandler(async () => {
    const { data, error } = await supabase.auth.signUp({
        email: 'someone@email.com',
        password: 'xOFCZsgtgXGNoiOgNkfM',
    })
    console.log({
        data,
        error,
    })
})

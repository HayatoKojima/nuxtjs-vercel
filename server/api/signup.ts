import supabase from '@/utils/supabase'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { data, error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
    })
    console.log({
        body,
        data,
        error,
    })
    return {
        data,
        error,
    }
})

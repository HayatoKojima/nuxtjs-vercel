import supabase from '@/utils/supabase'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password,
    })
    console.log({ data, error })
    return {
        data,
        error,
    }
})

import supabase from '@/utils/supabase'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {
        data: { user },
    } = await supabase.auth.getUser(body.jwt)
    return user
})

import supabase from '@/utils/supabase'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const data = await supabase.auth.getUser()
    console.log(data)
    return '/'
})

import supabase from '@/utils/supabase'

export default defineEventHandler(async () => {
    const { data, error } = await supabase.from('todos').select('*')
    return error ? {} : data
})

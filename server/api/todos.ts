import supabase from '@/utils/supabase'
import { Todo } from './todo'

export default defineEventHandler(async () => {
    const { data, error } = await supabase.from('todos').select('*')
    return error ? [] : (data as Todo[])
})

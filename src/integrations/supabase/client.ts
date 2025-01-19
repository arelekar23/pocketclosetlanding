import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vaajfnohbxveautwjnwu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhYWpmbm9oYnh2ZWF1dHdqbnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2OTI0MDAsImV4cCI6MjAyMTI2ODQwMH0.Ij5jA7tVFtWgmGHGFfhHXYGzEELxqh6-Ij_KNqYvHPE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
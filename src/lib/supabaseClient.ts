import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://dqdlecrcfnmridxmrolx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZGxlY3JjZm5tcmlkeG1yb2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NTg0MTEsImV4cCI6MjAzMzEzNDQxMX0.kg1FRGSDAqSprDWRDwgKv64uzYR_kKNlrDdruuvgMRk'
)

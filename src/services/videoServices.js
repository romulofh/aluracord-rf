import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://jeviurmeefxigttitibo.supabase.co"
const PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impldml1cm1lZWZ4aWd0dGl0aWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjY0NDQsImV4cCI6MTk4Mzk0MjQ0NH0.7mFpn36PWwkApxd8NzpjvezPhznM5CLKb7uOZae8a-8"
const supabase = createClient(PROJECT_URL, PUBLIC_API_KEY)

export function videoService() {
  return{
    getAllVideos() {
      return supabase.from("video")
              .select("*")
    }
  }
}
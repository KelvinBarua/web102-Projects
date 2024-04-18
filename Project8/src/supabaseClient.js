import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://pbnswcecldvzbbeilrnr.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_KEY;

/*

Every row in the "Posts" table should have 
- a title
- text box area
- possibly an image link or a video link
- upvote count

*/

export const supabase = createClient(supabaseURL, supabaseAnonKey);
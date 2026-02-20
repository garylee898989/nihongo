// Initialize Supabase Client
// Replace these with your own project URL and Key from Supabase Dashboard
const SUPABASE_URL = 'https://zkpvdrwsprblmgzlhysf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcHZkcndzcHJibG1nemxoeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTczOTYsImV4cCI6MjA4NzE3MzM5Nn0.zmogy54dxokxjOIraPK21rPfeFZuzDTLr7Iwnd3dNP4';

// Check if credentials are set
if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_KEY === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn('Please update js/lib/supabaseClient.js with your Supabase credentials!');
    alert('請在 js/lib/supabaseClient.js 檔案中設定您的 Supabase URL 和 Key！');
}

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

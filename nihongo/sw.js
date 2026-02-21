const CACHE_NAME = 'nihongo-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg',
    './js/globals.js',
    './js/lib/supabaseClient.js',
    './js/components/UI.js',
    './js/pages/Login.js',
    './js/pages/Words.js',
    './js/pages/Grammar.js',
    './js/pages/Sentences.js',
    './js/App.js',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/react@18/umd/react.development.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    'https://unpkg.com/history@5/umd/history.development.js',
    'https://unpkg.com/react-router@6.3.0/umd/react-router.development.js',
    'https://unpkg.com/react-router-dom@6.3.0/umd/react-router-dom.development.js',
    'https://unpkg.com/@supabase/supabase-js@2',
    'https://unpkg.com/@babel/standalone/babel.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Skip Supabase API requests (let them go to network)
    if (event.request.url.includes('supabase.co')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((response) => {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
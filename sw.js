// 定義快取名稱
const CACHE_NAME = 'badminton-app-v1';

// 安裝事件
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting();
});

// 啟用事件
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated');
  return self.clients.claim();
});

// 攔截網路請求（確保符合 PWA 基本標準）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

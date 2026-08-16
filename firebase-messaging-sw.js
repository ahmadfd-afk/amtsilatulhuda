importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyBajz9-X3RlIXphaH0a--OSvQM6_nhV6pE",
  projectId: "sms-digi",
  messagingSenderId: "477801725664",
  appId: "1:477801725664:web:0a1fc140d6ec907e1c9a85"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Menangani pesan yang masuk saat aplikasi berjalan di latar belakang (Background)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Menerima pesan di background ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'icon-192.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAtsdhl6uM-4tVnRCQQVzs2Bn9J8xRP8hc",
    authDomain: "raceducater-abd21.firebaseapp.com",
    projectId: "raceducater-abd21",
    storageBucket: "raceducater-abd21.appspot.com",
    messagingSenderId: "101237644811",
    appId: "1:101237644811:android:3e4470ca1157dc88c0f10e",
    measurementId: "G-9V0FYTXPCK"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

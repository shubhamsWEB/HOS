import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyA4AHcPt0SHxJPROMGnAeRAnB2YYJ1oTPM",
    authDomain: "diamond-public.firebaseapp.com",
    projectId: "diamond-public",
    storageBucket: "diamond-public.appspot.com",
    messagingSenderId: "929595531028",
    appId: "1:929595531028:web:daefefb4383890eaceac01"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export { storage };
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbaDqYFyVL6zRf2SNA4yPqreDCukK4hC8',
  authDomain: 'drivent-auth.firebaseapp.com',
  projectId: 'drivent-auth',
  storageBucket: 'drivent-auth.appspot.com',
  messagingSenderId: '711711276895',
  appId: '1:711711276895:web:6b13fb13e5c9cdd42900ea'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

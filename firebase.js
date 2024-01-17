// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCylzY0fhSgL4pcOqwtBogVrLyQzmEXqzo',
  authDomain: 'react-native-project-965c3.firebaseapp.com',
  projectId: 'react-native-project-965c3',
  storageBucket: 'react-native-project-965c3.appspot.com',
  messagingSenderId: '871660729831',
  appId: '1:871660729831:web:490452dd73594cad93b942',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

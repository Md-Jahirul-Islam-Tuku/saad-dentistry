import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCbY1yUQNuSQNZFOLHBgw20sXlqwdshsH4",
  authDomain: "saad-dentistry.firebaseapp.com",
  projectId: "saad-dentistry",
  storageBucket: "saad-dentistry.appspot.com",
  messagingSenderId: "955988604182",
  appId: "1:955988604182:web:d7b45b0ab61a4259ad0c37"
};

const app = initializeApp(firebaseConfig);

export default app;
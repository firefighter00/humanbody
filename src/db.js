import { initializeApp } from "firebase/app"
import { getDatabase} from "firebase/database";
  
const firebaseConfig = {
    apiKey: "AIzaSyBF6zDgkQN2ess35jm4zjsV-1ztpkCQL6U",
    authDomain: "esp32-7ca01.firebaseapp.com",
    databaseURL: "https://esp32-7ca01-default-rtdb.firebaseio.com",
    projectId: "esp32-7ca01",
    storageBucket: "esp32-7ca01.appspot.com",
    messagingSenderId: "972170425595",
    appId: "1:972170425595:web:69df31d922860e0f386c5e",
    measurementId: "G-ZBRE0QC68D"
  };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// var db = firebase.database();
let db = getDatabase(app);
export default db;
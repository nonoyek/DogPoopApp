import { useState, useEffect } from 'react';
import * as firebase from "firebase";

//Setting up Firebase connection
const config = {
  apiKey: "AIzaSyA6iPmdMQFyBmH7aPiukZ71srz9vHw0uSs",
  authDomain: "angelapp-6b5e0.firebaseapp.com",
  databaseURL: "https://angelapp-6b5e0.firebaseio.com",
  projectId: "angelapp-6b5e0",
  storageBucket: "angelapp-6b5e0.appspot.com",
  messagingSenderId: "154350512943",
  appId: "1:154350512943:web:76db72c57a2132b726cfda",
  measurementId: "G-G8KDJNWBDG",
};

export function useFirebaseData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      firebase.initializeApp(config);
      console.log('Logged into app');
    } catch (e) {
      console.log('App reloaded, so firebase did not re-initialize');
    }
    firebase
      .database()
      .ref('testL1/')
      .on('value', function (snapshot) {
        snapshot.forEach((child1) => {
          if (child1.val()) {
            setData([...data, child1.val()]);
          }
        });
      });
  });
  return data;
}

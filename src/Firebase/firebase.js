// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyDT2p-ErlDdfj3NqQN3KocJ8BlS82-oTe4",
//   authDomain: "newlinkedclone.firebaseapp.com",
//   databaseURL: "https://newlinkedclone-default-rtdb.firebaseio.com",
//   projectId: "newlinkedclone",
//   storageBucket: "newlinkedclone.appspot.com",
//   messagingSenderId: "416148077739",
//   appId: "1:416148077739:web:a7a9d612beb8f7f6d7cbee"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth }

import firebase from 'firebase'
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDT2p-ErlDdfj3NqQN3KocJ8BlS82-oTe4",
  authDomain: "newlinkedclone.firebaseapp.com",
  databaseURL: "https://newlinkedclone-default-rtdb.firebaseio.com",
  projectId: "newlinkedclone",
  storageBucket: "newlinkedclone.appspot.com",
  messagingSenderId: "416148077739",
  appId: "1:416148077739:web:a7a9d612beb8f7f6d7cbee"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
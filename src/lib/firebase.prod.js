import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAP2ZFsPGBMhfTByv5ooqPuYEDVmc-VUTM',
  authDomain: 'react-netflix-b217d.firebaseapp.com',
  databaseURL: 'https://react-netflix-b217d.firebaseio.com',
  projectId: 'react-netflix-b217d',
  storageBucket: 'react-netflix-b217d.appspot.com',
  messagingSenderId: '117223045543',
  appId: '1:117223045543:web:10bac575e795c89ec9de82',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

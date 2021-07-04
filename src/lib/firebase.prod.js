import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAP2ZFsPGBMhfTByv5ooqPuYEDVmc-VUTM',
  authDomain: 'react-netflix-b217d.firebaseapp.com',
  databaseURL: 'https://react-netflix-b217d.firebaseio.com',
  projectId: 'react-netflix-b217d',
  storageBucket: 'react-netflix-b217d.appspot.com',
  messagingSenderId: '117223045543',
  appId: '1:117223045543:web:35cb2380e02f0688c9de82',
  measurementId: 'G-2N2KGQ57C3',
};

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);

export { firebase };

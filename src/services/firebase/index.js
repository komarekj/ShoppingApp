import * as firebase from 'firebase';
import 'firebase/firestore';
import config from './firebaseConfig.json';

export const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();

import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
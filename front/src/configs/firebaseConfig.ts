// the fire base tokens
import configs from "./_firebaseConfig";

import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


export const app = initializeApp(configs);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

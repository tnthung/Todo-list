// the fire base tokens
import configs from "./_firebaseConfig";

import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";


export const app = initializeApp(configs);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);

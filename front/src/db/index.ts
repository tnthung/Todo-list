import { db } from "@/configs/firebaseConfig";

import {
  collection,
  CollectionReference
} from "firebase/firestore";


export const getCol = <S = Record<string, any>>(path: string) =>
  collection(db, path) as CollectionReference<S>;

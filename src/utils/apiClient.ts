import { getApp, getApps, initializeApp } from 'firebase/app'
import { DocumentData } from 'firebase/firestore'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const caligari_app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(caligari_app)

export const apiClient = {
  get: async <T>(firebaseCollection: string, params?: any): Promise<T> => {
    console.log('db', firebaseCollection)
    const collectionReference = collection(db, firebaseCollection)
    const collectionSnapshot = await getDocs(collectionReference)
    const collectionData = collectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as T
    return collectionData
  },
}

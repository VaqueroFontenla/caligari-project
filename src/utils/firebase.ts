import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const caligari_app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(caligari_app)

export const firebaseCollection: Record<string, string> = {
  innsCollection: 'inns',
  featuresCollection: 'features',
}

export const setFBDocument = (firebaseCollection: string, id: string) =>
  doc(db, firebaseCollection, id)
export const apiClient = {
  get: async <T>(firebaseCollection: string, params?: any): Promise<T> => {
    try {
      const collectionReference = collection(db, firebaseCollection)
      const collectionSnapshot = await getDocs(collectionReference)
      const collectionData = collectionSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      }) as T
      return collectionData
    } catch (error) {
      console.error('Error al obtener documentos:', error)
      throw error
    }
  },
  getById: async <T>(firebaseCollection: string, documentId: string, params?: any): Promise<T> => {
    try {
      const documentReference = doc(db, firebaseCollection, documentId)
      const documentSnapshot = await getDoc(documentReference)
      const documentData = { ...documentSnapshot.data(), id: documentSnapshot.id }
      return documentData as T
    } catch (error) {
      console.error('Error al obtener el documento:', error)

      throw error
    }
  },
  getRelatedValues: async <T>(
    firebaseCollection: string,
    documentIds: string[],
    params?: any
  ): Promise<T> => {
    const documentsRef = collection(db, firebaseCollection)
    const queryDocs = query(documentsRef, where('__name__', 'in', documentIds))

    try {
      const documentsSnapshot = await getDocs(queryDocs)
      const relatedValues: Record<string, string>[] = []
      documentsSnapshot.forEach((doc) => {
        relatedValues.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return relatedValues as T
    } catch (error) {
      console.error('Error al obtener documentos relacionados:', error)
      throw error
    }
  },
  post: async <T>(firebaseCollection: string, data?: any): Promise<T> => {
    try {
      const collectionReference = collection(db, firebaseCollection)
      const newDocumentRef = await addDoc(collectionReference, data)
      return newDocumentRef as T
    } catch (error) {
      throw error
    }
  },
}

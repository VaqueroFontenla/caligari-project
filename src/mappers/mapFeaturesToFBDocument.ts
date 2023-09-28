import { setFBDocument } from 'utils/firebase'

export const mapFeaturesToFBDocument = (firebaseCollection: string, featuresIDs: string[]) =>
  featuresIDs.map((featureId) => setFBDocument(firebaseCollection, featureId))

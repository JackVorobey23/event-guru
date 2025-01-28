import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '..';

export const deleteInvitees = async (eventId: string): Promise<void> => {
  try {
    const inviteesRef = collection(db, 'invitees');
    const q = query(inviteesRef, where('eventId', '==', eventId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });

    console.log('Invitees deleted for event:', eventId);
  } catch (error) {
    console.error('Error deleting invitees: ', error);
  }
};

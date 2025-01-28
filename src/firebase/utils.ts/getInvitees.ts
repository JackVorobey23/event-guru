import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '..';

export const getInvitees = async (eventId: string): Promise<string[]> => {
  try {
    const inviteesRef = collection(db, 'invitees');
    const q = query(inviteesRef, where('eventId', '==', eventId));
    const querySnapshot = await getDocs(q);

    const invitees: string[] = [];
    querySnapshot.forEach((doc) => {
      invitees.push(doc.data().name);
    });

    return invitees;
  } catch (error) {
    console.error('Error getting invitees: ', error);
    return [];
  }
};

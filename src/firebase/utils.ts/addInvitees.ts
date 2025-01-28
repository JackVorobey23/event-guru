import { addDoc, collection } from 'firebase/firestore';
import { db } from '..';
import { Invitee } from '@components/Event/types';

export const addInvitees = async (
  eventId: string,
  invitees: Invitee[]
): Promise<void> => {
  try {
    const inviteesRef = collection(db, 'invitees');
    for (const invitee of invitees) {
      await addDoc(inviteesRef, {
        eventId,
        name: invitee.name,
      });
    }
    console.log('Invitees added successfully for event:', eventId);
  } catch (error) {
    console.error('Error adding invitees: ', error);
  }
};

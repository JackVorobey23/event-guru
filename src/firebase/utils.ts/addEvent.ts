import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '..';
import { Event } from '@components/Event/types';
import { addInvitees } from './addInvitees';

export const addEvent = async (userId: string, event: Event): Promise<void> => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const currentEvents: Event[] = userDoc.data()?.events || [];
    currentEvents.push(event);

    await updateDoc(userRef, {
      events: currentEvents,
    });

    if (event.invitees.length > 0) {
      await addInvitees(event.id, event.invitees);
    }

    console.log('Event added successfully for user:', userId);
  } else {
    console.error('User not found:', userId);
    throw new Error(`User not found: ${userId}`);
  }
};

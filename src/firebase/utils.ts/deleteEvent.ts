import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '..';
import { deleteInvitees } from './deleteInvitees';
import { Event } from '@components/Event/types';

export const deleteEvent = async (
  userId: string,
  eventId: string
): Promise<void> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const currentEvents: Event[] = userDoc.data()?.events || [];
      const updatedEvents = currentEvents.filter(
        (event) => event.id !== eventId
      );

      await updateDoc(userRef, {
        events: updatedEvents,
      });
      console.log('Event deleted successfully for user:', userId);

      // Also remove the invitees for this event
      await deleteInvitees(eventId);
    } else {
      console.error('User not found:', userId);
    }
  } catch (error) {
    console.error('Error deleting event: ', error);
  }
};

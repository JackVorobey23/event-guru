import { doc, getDoc } from 'firebase/firestore';
import { db } from '..';
import { Event } from '@components/Event/types';

export const getEventsInfo = async (userId: string): Promise<Event[]> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const events: Event[] = userDoc.data()?.events || [];

      return events;
    } else {
      console.error('User not found:', userId);
      return [];
    }
  } catch (error) {
    console.error('Error getting events info: ', error);
    return [];
  }
};

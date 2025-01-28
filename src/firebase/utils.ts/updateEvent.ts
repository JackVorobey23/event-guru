import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '..';
import { Event } from '@components/Event/types';

export const updateEventForUser = async (
  userId: string,
  updatedEvent: Pick<Event, 'id'> & Partial<Event>
): Promise<void> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    console.log(updatedEvent);

    if (userDoc.exists()) {
      // const currentEvents: Event[] = userDoc.data()?.events || [];
      // const eventIndex = currentEvents.findIndex(
      //   (e) => e.id === updatedEvent.id
      // );

      // if (eventIndex > -1) {
      // const eventToUpdate = currentEvents[eventIndex];

      // const updatedEventData = { ...eventToUpdate, ...updatedEvent };

      // currentEvents[eventIndex] = updatedEventData;

      await updateDoc(userRef, {
        events: [
          {
            date: '2027-10-01T12:00',
            id: '9f9839f9-6fb3-4ecb-90ca-8641e2ff7a0f',
            invitees: [],
            type: 'похорони',
            budget: '3000',
            location: {
              coords: { lat: 26.902476886279832, lng: 9.140625000000002 },
              name: 'африка)',
            },
            description: 'dam',
          },
          {
            id: 'a5f41b6a-2f50-4ca8-9baa-fa799a529909',
            description: 'dam2',
            budget: 4000,
            type: 'весілля',
            location: {
              coords: { lat: 50.44703680242657, lng: 30.454101562500004 },
              name: 'поляна',
            },
            date: '2025-01-08T12:00',
            invitees: [],
          },
          {
            invitees: [],
            budget: 1000,
            id: 'c8e6c774-8938-4253-8162-6f43e2f8268f',
            date: '2025-01-08T12:00',
            description: 'dam2',
            location: {
              name: 'поляна',
              coords: { lng: 30.454101562500004, lat: 50.44703680242657 },
            },
            type: 'весілля',
          },
          {
            date: '2025-01-23T12:00',
            description: 'goddamn',
            location: {
              coords: { lng: 6.855468750000001, lat: 47.33882269482202 },
              name: 'поляна',
            },
            type: 'дитяче свято',
            budget: 1000,
            invitees: [],
            id: '922a4715-adfd-4044-8d92-2318fe0c003e',
          },
          {
            date: '2025-01-23T12:00',
            id: '4d8e18f5-f38c-46ff-90e7-2dc6c8fd817e',
            type: 'похорони йосипа',
            location: {
              name: 'поляна',
              coords: { lng: 6.855468750000001, lat: 47.33882269482202 },
            },
            description: ':(',
            invitees: [],
            budget: 50,
          },
        ],
      });

      //   console.log('Event updated successfully for user:', userId);
      // } else {
      //   console.error('Event not found:', updatedEvent.id);
      // }
    } else {
      console.error('User not found:', userId);
    }
  } catch (error) {
    console.error('Error updating event: ', error);
  }
};

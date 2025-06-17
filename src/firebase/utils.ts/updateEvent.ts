import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "..";
import { Event } from "@components/Event/types";

export const updateEventForUser = async (
  userId: string,
  updatedEvent: Pick<Event, "id"> & Partial<Event>
): Promise<void> => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const currentEvents: Event[] = userDoc.data()?.events || [];

      const eventIndex = currentEvents.findIndex(
        (e) => e.id === updatedEvent.id
      );

      if (eventIndex > -1) {
        const eventToUpdate = currentEvents[eventIndex];

        const updatedEventData = { ...eventToUpdate, ...updatedEvent };
        const { lat, lng } = { ...updatedEventData.location.coords };
        updatedEventData.location.coords = { lat, lng };
        currentEvents[eventIndex] = updatedEventData;
        await updateDoc(userRef, {
          events: currentEvents,
        });
      }
    } else {
      console.error("User not found:", userId);
    }
  } catch (error) {
    console.error("Error updating event: ", error);
  }
};

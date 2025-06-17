import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the import to your Firestore configuration
import { Event } from "@components/Event/types";
import { setEvents } from "@redux/slices/eventsSlice";

type UseEventsSubscribeProps = {
  userId: string;
};

const useEventsSubscribe = ({ userId }: UseEventsSubscribeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDocRef = doc(db, "users", userId);

    const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const events: Event[] = userData?.events || [];

        dispatch(setEvents(events));
      } else {
        console.error("No such user document!");
      }
    });

    return () => unsubscribe();
  }, [dispatch, userId]);

  return null;
};

export default useEventsSubscribe;

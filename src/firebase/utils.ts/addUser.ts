import { UserInfo } from "@components/Auth/types";
import { db } from "..";
import { doc, setDoc } from "firebase/firestore";

export const addUser = async (userInfo: UserInfo): Promise<void> => {
  const uid = window.crypto.randomUUID();
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
      email: userInfo.email,
      emailVerified: userInfo.emailVerified,
      refreshToken: userInfo.refreshToken,
      events: [], // Initialize an empty events array for the user
    });
    console.log("User added successfully with UID:", uid);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

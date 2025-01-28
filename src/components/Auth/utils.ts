import { addUser } from '@/firebase/utils.ts/addUser';
import { checkEmail } from '@/utils/checkEmail';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';

export const login = async (
  email: string,
  password: string
): Promise<User | { code: string; message: string }> => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return { code: error.code, message: error.message };
    }
    return {
      code: '0',
      message: 'unknown',
    };
  }
};

export const signUp = async (
  email: string,
  password: string
): Promise<User | { code: string; message: string }> => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    addUser(userCredential.user);
    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return { code: error.code, message: error.message };
    }
    return {
      code: '0',
      message: 'unknown',
    };
  }
};

export const validateCredentials = (email: string, pwd: string) => {
  const errors: string[] = [];
  if (!checkEmail(email)) {
    errors.push('Формал імейлу не правильний!');
  }
  if (pwd.length < 8) {
    errors.push('Довжина паролю має бути більше восьми символів!');
  }
  return errors;
};


import { auth } from '@/firebase.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const LoginAPI = (email: string, password: string) => {
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = (email: string, password: string) => {
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return error;
    }
  };
  

  export const onLogout = () => {
    try {
      signOut(auth);
    } catch (err) {
      return err;
    }
  };  
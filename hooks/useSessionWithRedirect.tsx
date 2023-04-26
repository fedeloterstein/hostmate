import { auth } from '@/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useSessionWithRedirect = (route: string) => {
  const [session, setsession] = useState<any>();
  const [loading, setloading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      if (!res?.accessToken) {
        router.push(route);
        setsession(undefined);
      } else {
        setsession(res);
        setloading(false);
      }
    });
  }, []);

  return { session, loading, setloading };
};

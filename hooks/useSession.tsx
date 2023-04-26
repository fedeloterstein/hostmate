import { auth } from '@/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'

export const useSession = () => {
    const [session, setsession] = useState<any>();
    const [loading, setloading] = useState(true);
  
  
    useEffect(() => {
      onAuthStateChanged(auth, (res: any) => {
        if (!res?.accessToken) {
          setsession(undefined);
        } else {
          setloading(false);
          setsession(res);
        }
      });
    }, []);

    return {session, loading, setloading}
}

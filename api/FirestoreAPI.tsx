import { firestore } from '@/firebase.config';
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';

let userRef = collection(firestore, 'users');
let meetRef = collection(firestore, 'meets');

export const getAllUsers = (setAllUsers: any) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
      .filter((item: any) => {
        return item.typeUser !== 'owner';
      }),
    );
  });
};

export const getSingleUser = (setCurrentUser: any, email: any) => {
  const singleUserQuery = query(userRef, where('email', '==', email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0],
    );
  });
};

export const postUserData = (object: any) => {
  return addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const postMeetData = (object: any) => {
  return addDoc(meetRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser: any) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getMeetUser = (setMeetsUser: any, email: any) => {
  onSnapshot(meetRef, (response) => {
    setMeetsUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item: any) => {
          return item.to === email;
        }),
    );
  });
};

export const editProfile = (userID: any, payload: any) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      alert('Profile has been updated successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editViews = (userID: any, payload: any) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .catch((err) => {
      console.log(err);
    });
};


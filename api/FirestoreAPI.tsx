import { firestore } from '@/firebase.config';
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

let postsRef = collection(firestore, 'posts');
let userRef = collection(firestore, 'users');
let meetRef = collection(firestore, 'meets');
let likeRef = collection(firestore, 'likes');
let commentsRef = collection(firestore, 'comments');
let connectionRef = collection(firestore, 'connections');

export const postStatus = ({ object }: any) => {
  addDoc(postsRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getStatus = ({ setAllStatus }: any) => {
  const q = query(postsRef, orderBy('timeStamp'));
  onSnapshot(q, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getAllUsers = ({ setAllUsers }: any) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getSingleStatus = ({ setAllStatus, id }: any) => {
  const singlePostQuery = query(postsRef, where('userID', '==', id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });   
};

export const getSingleUser = ( setCurrentUser: any, email: any) => {
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
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      
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


export const editProfile = ( userID: any, payload: any) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      alert('Profile has been updated successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const likePost = ({ userId, postId, liked }: any) => {
  try {
    let docToLike = doc(likeRef, `${userId}_${postId}`);
    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userId, postId });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLikesByUser = ({ userId, postId, setLiked, setLikesCount }: any) => {
  try {
    let likeQuery = query(likeRef, where('postId', '==', postId));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userId === userId);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });
  } catch (err) {
    console.log(err);
  }
};

export const postComment = ({ postId, comment, timeStamp, name }: any) => {
  try {
    addDoc(commentsRef, {
      postId,
      comment,
      timeStamp,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = ({ postId, setComments }: any) => {
  try {
    let singlePostQuery = query(commentsRef, where('postId', '==', postId));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComments(comments);
    });
  } catch (err) {
    console.log(err);
  }
};

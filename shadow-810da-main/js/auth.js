import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { addDocument } from './firestore.js';
import { app } from './firebase-config.js';

const auth = getAuth(app);

// Inscription utilisateur avec rôle
export const registerUser = async (email, password, firstName, lastName, role = 'user') => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Ajouter l'utilisateur à Firestore
    await addDocument('users', {
      uid: user.uid,
      email,
      firstName,
      lastName,
      role,
      createdAt: new Date()
    });

    return user;
  } catch (error) {
    console.error("Erreur d'inscription : ", error);
    throw error;
  }
};

// Connexion utilisateur
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erreur de connexion : ", error);
    throw error;
  }
};

// Déconnexion utilisateur
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erreur de déconnexion : ", error);
    throw error;
  }
};

// Vérifier l'état de connexion et le rôle
export const checkAuthState = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUserData(user.uid);
      callback({ ...user, role: userData?.role || 'user' });
    } else {
      callback(null);
    }
  });
};

// Récupérer les données utilisateur depuis Firestore
export const getUserData = async (uid) => {
  const users = await getDocuments('users', [{ field: 'uid', operator: '==', value: uid }]);
  return users[0];
};
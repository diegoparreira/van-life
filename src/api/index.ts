import { db, auth } from "./firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { signInWithEmailAndPassword } from "firebase/auth";

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log(vans);
    return vans;
}

export async function getVan(id: string) {
    const ref = doc(db, "vans", id);
    const snapshot = await getDoc(ref);
    return {
        ...snapshot.data(),
        id: snapshot.id,
    };
}

export async function getHostVans(id: string) {
    const q = query(vansCollectionRef, where("hostId", "==", id));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log(vans);
    return vans;
}

export async function loginUser(creds: { email: string; password: string }) {
    const { email, password } = creds;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        return user;
    } catch (error: any) {
        console.error("Firebase Auth Error:", error.code);
        console.error("Error message:", error.message);
        throw {
            code: error.code,
            message: error.message,
            statusText: "Authentication Failed",
        };
    }
}

// export async function getVans() {
//     const res = await fetch(`/api/vans`);
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         };
//     }
//     const data = await res.json();
//     return data.vans;
// }

// export async function loginUser(creds: object) {
//     const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) });
//     const data = await res.json();

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status,
//         };
//     }

//     return data;
// }

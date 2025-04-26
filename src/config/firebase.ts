// server/src/config/firebase.ts
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  // Raw key de la variable de entorno
  const rawKey = process.env.FIREBASE_PRIVATE_KEY || "";

  // 1) Quitamos comillas envolventes
  // 2) Convertimos literales \n en saltos de línea
  // 3) Borramos cualquier \ que esté justo antes de un salto de línea
  const cleanedKey = rawKey
    .replace(/^"|"$/g, "")
    .replace(/\\n/g, "\n")
    .replace(/\\$/gm, "");

  //console.log("🔑 Firebase Private Key (parsed):\n", cleanedKey);

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: cleanedKey,
    }),
  });

  console.log("✅ Firebase Admin inicializado");
}

export default admin;

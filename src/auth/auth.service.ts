//server/src/auth/auth.service.ts
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
// Importa PrismaService cuando lo creemos
// import { PrismaService } from '../prisma/prisma.service';
// Importa firebase-admin cuando lo configuremos
import * as admin from "firebase-admin";

@Injectable()
export class AuthService {
  // Inyecta ConfigService para leer variables de entorno (ej: credenciales Firebase Admin)
  // Inyecta PrismaService para interactuar con la DB
  constructor(
    private readonly configService: ConfigService,
    // private readonly prisma: PrismaService,
  ) {
    // Aquí podríamos inicializar Firebase Admin si no se hace en main.ts
  }

  async registerUser(idToken: string): Promise<any> {
    // TODO: Implementar lógica de registro:
    // 1. Verificar idToken con Firebase Admin SDK
    // 2. Extraer uid, email, name del token verificado
    // 3. Comprobar si el usuario (firebaseUid) ya existe en la DB (Prisma)
    // 4. Si no existe, crear usuario con status PENDING usando Prisma
    // 5. Retornar el usuario creado o un mensaje de éxito/error
    console.log(
      "AuthService: registerUser llamado con token:",
      idToken ? "presente" : "ausente",
    );

    // Example of using await with verifyFirebaseToken
    const decodedToken = await this.verifyFirebaseToken(idToken);

    // Placeholder
    return {
      message: "Registro pendiente de implementación",
      tokenReceived: !!idToken,
      decodedToken,
    };
  }

  async loginUser(idToken: string): Promise<any> {
    // TODO: Implementar lógica de login:
    // 1. Verificar idToken con Firebase Admin SDK
    // 2. Extraer uid del token verificado
    // 3. Buscar usuario en la DB por firebaseUid (Prisma)
    // 4. Verificar si el usuario existe, está APPROVED y tiene el rol adecuado (ADMIN o Conserjería)
    // 5. Retornar datos del usuario (incluyendo rol) o un error de autorización
    console.log(
      "AuthService: loginUser llamado con token:",
      idToken ? "presente" : "ausente",
    );
    const decodedToken = await this.verifyFirebaseToken(idToken);

    return {
      message: "Login pendiente de implementación",
      tokenReceived: !!idToken,
      decodedToken,
    };
  }

  // Podríamos añadir aquí la lógica de verificación del token si no usamos un Guard
  async verifyFirebaseToken(
    idToken: string,
  ): Promise<admin.auth.DecodedIdToken | null> {
    // TODO: Implementar la verificación real usando firebase-admin
    console.log("AuthService: verifyFirebaseToken llamado con token:", idToken);
    if (!idToken) {
      return null;
    }
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      console.error("Error verifying Firebase token:", error);
      return null;
    }
  }
}

import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { PrismaModule } from "./database/prisma.module";
// (agrega otros módulos aquí también, como AuthModule, si ya los tienes)

@Module({
  imports: [
    PrismaModule,
    AdminModule,
    // Otros módulos como AuthModule, UsersModule...
  ],
})
export class AppModule {}

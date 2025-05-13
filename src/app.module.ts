import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { NovedadesModule } from './novedades/novedades.module';
import { ConserjeriaModule } from './conserjeria/conserjeria.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AdminModule,
    NovedadesModule,
    ConserjeriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

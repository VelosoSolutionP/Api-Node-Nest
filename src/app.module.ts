import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // .env global
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: parseInt(config.get<string>('DB_PORT', '3306')),
        username: config.get<string>('DB_USER', 'root'),
        password: config.get<string>('DB_PASS', ''),
        database: config.get<string>('DB_NAME', 'clientesdb'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // somente para desenvolvimento
        // logging: true,
      }),
    }),
    ClientesModule,
  ],
})
export class AppModule {}

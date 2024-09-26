import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'apps/auth/src/auth.module';
import { AuthService } from 'apps/auth/src/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, ConfigService, AuthService],
})
export class UsersModule {}

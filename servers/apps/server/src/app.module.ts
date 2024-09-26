import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthzModule } from './healthz/healthz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    //   driver: ApolloGatewayDriver,
    //   gateway: {
    //     supergraphSdl: new IntrospectAndCompose({
    //       subgraphs: [],
    //     }),
    //   },
    // }),
    HealthzModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

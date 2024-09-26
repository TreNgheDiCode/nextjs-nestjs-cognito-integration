import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private client: CognitoIdentityProviderClient;

  constructor(private readonly configService: ConfigService) {
    this.client = new CognitoIdentityProviderClient({
      region: this.configService.get('COGNITO_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }
  // Get All Users Service
  async getUsers() {
    const command = new ListUsersCommand({
      UserPoolId: this.configService.get('COGNITO_USER_POOL_ID'),
    });

    const users = await this.client.send(command);

    return users.Users;
  }
}

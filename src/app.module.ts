import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatCompletionApiService } from './chat-completion-api/chat-completion-api.service';
import { ChatCompletionApiModule } from './chat-completion-api/chat-completion-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatCompletionApiModule],
  controllers: [AppController],
  providers: [AppService, ChatCompletionApiService],
})
export class AppModule { }

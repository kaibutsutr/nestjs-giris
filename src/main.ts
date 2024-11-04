import { AppModule } from "./app.module"; // need appmodule in the function
import { NestFactory } from "@nestjs/core"; // this is only exception

async function bootstrap() {
  // our starter function to start the server
  const app = await NestFactory.create(AppModule);

  await app.listen(3000); // listen to port 3000
}

bootstrap();

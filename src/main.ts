import { Controller, Module, Get } from "@nestjs/common"; // we almost always import from /common
import { NestFactory } from "@nestjs/core"; // this is only exception

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hello world";
  }
}
@Module({ controllers: [AppController] })
class AppModule {}

async function bootstrap() {
  // our starter function to start the server
  const app = await NestFactory.create(AppModule);

  await app.listen(3000); // listen to port 3000
}

bootstrap();

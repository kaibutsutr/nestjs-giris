import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
// we need to import these first
@Module({ controllers: [AppController] })
export class AppModule {}

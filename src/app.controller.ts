import { Controller, Get } from "@nestjs/common";
// import these from common
@Controller()
export class AppController {
  // export this block
  @Get()
  getRootRoute() {
    return "Hello world";
  }
}

import { Controller, Get } from "@nestjs/common";
// import these from common
@Controller("/api")
export class AppController {
  // export this block
  @Get("/") getRootRoute() {
    return "Main page";
  }
  @Get("/hello") //hello route
  getHelloRoute() {
    return "Hello world";
  }
  @Get("/login") // login route
  getLoginRoute() {
    return "Login page";
  }
}

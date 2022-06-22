import { Controller, Get, Redirect, Req, Res } from "@nestjs/common";

@Controller()
export class MainController {
    @Get()
    redirect(@Res() res) {
        return res.redirect('/graphql');
    }
}
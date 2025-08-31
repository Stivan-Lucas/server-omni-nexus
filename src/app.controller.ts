// src/app.controller.ts
import type { Response } from 'express';
import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  // Redireciona "/" para "/docs"
  @Get()
  @ApiExcludeEndpoint()
  redirectToDocs(@Res() res: Response) {
    return res.redirect('/docs');
  }

  // Redireciona "/api" para "/docs"
  @Get('api')
  @ApiExcludeEndpoint()
  redirectApiToDocs(@Res() res: Response) {
    return res.redirect('/docs');
  }
}

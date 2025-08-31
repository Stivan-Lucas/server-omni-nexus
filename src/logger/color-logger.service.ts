// src/logger/color-logger.service.ts
import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class ColorLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context, { colors: true }); // habilita cores
  }

  // você pode adicionar métodos customizados se quiser
  customLog(message: string) {
    this.log(`[CUSTOM] ${message}`);
  }
}

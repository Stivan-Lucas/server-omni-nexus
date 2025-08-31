// src/logger/no-color-logger.service.ts
import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class NoColorLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context, { colors: false });
  }

  logJson(message: string, level: string = 'log') {
    console.log(
      JSON.stringify({
        level,
        timestamp: new Date().toISOString(),
        context: this.context,
        message,
      }),
    );
  }
}

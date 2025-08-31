import { ColorLogger } from './color-logger.service';
import { NoColorLogger } from './no-color-logger.service';

export function createAppLogger(): ColorLogger | NoColorLogger {
  return process.env.NODE_ENV === 'production'
    ? new NoColorLogger('APP')
    : new ColorLogger('DEV');
}

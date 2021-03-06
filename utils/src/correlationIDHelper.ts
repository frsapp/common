
import { getNamespace } from 'continuation-local-storage';

export class CorrelationIDHelper {
  getCorrelationId() {
    const correlationIdNamespace = getNamespace('correlation_id');
    return correlationIdNamespace && correlationIdNamespace.get('correlationId') || 'unknown';
  }
}
export default new CorrelationIDHelper();
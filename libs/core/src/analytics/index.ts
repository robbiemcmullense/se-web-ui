import { GLOBAL_ANALYTICS_EVENT_NAME } from './constants';
import { GlobalAnalyticsEventDetails } from './types';

type EventSender = <T, U extends GlobalAnalyticsEventDetails>(
  eventDetailsBuilder: (params: T) => U,
  params: T,
  emitter?: HTMLElement,
) => void;

const send: EventSender = (eventDetailsBuilder, params, emitter) => {
  const event = new CustomEvent(GLOBAL_ANALYTICS_EVENT_NAME, {
    detail: eventDetailsBuilder(params),
    bubbles: true,
    composed: true,
  });

  (emitter || document).dispatchEvent(event);
};

export default { send };

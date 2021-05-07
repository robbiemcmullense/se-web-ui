import { refinementStateChangeEvent } from './events';

export type GlobalAnalyticsEventDetails = ReturnType<
  typeof refinementStateChangeEvent
>;

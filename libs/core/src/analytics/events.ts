import { events } from './constants';

export interface RefinementStateChangedEventParams {
  refinementId: string;
  isChecked: boolean;
}

export type RefinementStateChangedEvent = RefinementStateChangedEventParams & {
  event: typeof events.REFINEMENT_STATE_CHANGED;
};

export const refinementStateChangeEvent = (
  params: RefinementStateChangedEventParams
): RefinementStateChangedEvent => {
  return {
    event: events.REFINEMENT_STATE_CHANGED,
    ...params,
  };
};

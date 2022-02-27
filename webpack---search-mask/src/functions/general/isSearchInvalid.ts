import { isBefore, startOfDay } from 'date-fns';
import { getDateFromTimestampInSeconds } from 'app/functions/date';

export const isSearchInvalid = ({
  passengerCount = null,
  departureDate = null,
}: {
  passengerCount: null | number;
  departureDate?: null | number;
}) => {
  if (passengerCount !== null && passengerCount < 1) {
    return true;
  }

  if (departureDate !== null) {
    return isBefore(
      startOfDay(getDateFromTimestampInSeconds(departureDate)),
      startOfDay(new Date()),
    );
  }

  return false;
};

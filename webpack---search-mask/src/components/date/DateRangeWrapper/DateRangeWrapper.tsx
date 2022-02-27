import React, { FC } from 'react';
import { retryCall } from 'app/api';
import { LazyComponent } from 'app/containers/LazyComponent';
import cn from 'classnames';
import { variantSelector } from 'app/store/selectors';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { StoreState } from 'app/models/types';
import { DatePickerFallback } from '../../ui/DatePickerFallback';
import styles from './DateRangeWrapper.scss';

const TripDatePicker = React.lazy(() => retryCall(() => import('app/containers/TripDatePicker')));

export const DateRangeWrapperUi: FC<{ variant: string }> = ({ variant = 'compact' }) => (
  <div
    className={cn(styles.dateRangeWrapper, {
      [styles.nonCompact]: variant !== 'compact',
    })}
  >
    <LazyComponent fallback={<DatePickerFallback />}>
      <TripDatePicker />
    </LazyComponent>
  </div>
);

const mapStateToProps = (state: StoreState) => ({
  variant: variantSelector(state),
});

export const DateRangeWrapper = compose<{ variant: string }, {}>(connect(mapStateToProps))(
  DateRangeWrapperUi,
);

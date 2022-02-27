import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { WithTranslations } from 'app/containers/WithTranslations';
import { wheelchairSelectedSelector } from 'app/store/selectors';
import styles from './WheelchairMessage.scss';
import { StoreState } from 'app/models/types';

type WheelchairMessageProps = {
  active: boolean;
  message: () => string;
};

const Render: React.FC<WheelchairMessageProps> = ({ active, message }) => (
  <div
    className={classNames({
      [styles.wheelchairMessagePopup]: true,
      [styles.hidden]: !active,
    })}
  >
    <div dangerouslySetInnerHTML={{ __html: message() }} />
  </div>
);

const mapStateToProps = (state: StoreState) => ({
  active: wheelchairSelectedSelector(state),
});

export const WheelchairMessage = compose<WheelchairMessageProps, Partial<WheelchairMessageProps>>(
  connect(mapStateToProps),
  WithTranslations({
    message: 'search_mask.wheelchair_extra_info_message',
  }),
)(Render);

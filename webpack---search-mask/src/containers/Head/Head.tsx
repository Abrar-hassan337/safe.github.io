import React, { useEffect, useState } from 'react';
import { compose } from 'recompose';
import {
  departureDateSelector,
  departureCitySelector,
  arrivalCitySelector,
  localeSelector,
} from 'app/store/selectors';
import { WithTranslations } from 'app/containers/WithTranslations';
import { StoreState } from 'app/models/types';
import { connect } from 'react-redux';
import { LocaleUtils } from 'app/components/date/DateRangePicker/LocaleUtils';

type HeadUiProps = {
  getPageTitle: (s: any) => string;
  departureCity: { name: string };
  arrivalCity: { name: string };
  departureDate: Date;
  locale: string;
};
/**
 * HeadUi
 *
 * used to manipulate head elements dynamically
 * this should be rewritten to be a hook once dependencies are updated
 */
const HeadUi: React.FC<HeadUiProps> = ({
  getPageTitle,
  departureCity,
  arrivalCity,
  departureDate,
  locale,
}) => {
  // Self flag if title is in control of this component
  const [hasTitleControl, setHasTitleControl] = useState(false);
  useEffect(() => {
    if (departureCity && arrivalCity && !!getPageTitle && departureDate) {
      const date = LocaleUtils.getDateLabel(departureDate, locale);
      const title = getPageTitle({
        departure: departureCity.name,
        arrival: arrivalCity.name,
        date,
      });
      const titleTags = document.getElementsByTagName('title');
      if (
        !titleTags[0] ||
        titleTags[0].innerHTML.replace(/[ \n]/g, '').length === 0 ||
        hasTitleControl
      ) {
        document.title = title;
        // flag that it's this component that changed the title
        // this ensures title to be updated when data changes
        if (!hasTitleControl) setHasTitleControl(true);
      }
    }
  }, [departureCity, arrivalCity, getPageTitle, departureDate]);
  return null;
};

const mapStateToProps = (state: StoreState) => ({
  locale: localeSelector(state),
  departureDate: departureDateSelector(state),
  departureCity: departureCitySelector(state),
  arrivalCity: arrivalCitySelector(state),
});

export const Head = compose<HeadUiProps, {}>(
  connect(mapStateToProps),
  WithTranslations({
    getPageTitle: 'search_result_route_title',
  }),
)(HeadUi);

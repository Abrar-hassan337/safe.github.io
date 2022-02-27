import React, { FC } from 'react';
import styles from './MapLink.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { optionsSelector } from 'app/store/selectors';
import globalThumbnail from './assets/global.png';
import trThumbnail from './assets/tr.png';
import { getFlixTldFromHostname } from 'app/functions';
import { emitSearchMaskMapEvent } from 'app/events/emitSearchMaskMapEvent';

export type MapLinkProps = {
  title: string;
  text: string;
};

export const MapLink: FC<MapLinkProps> = ({ title, text }) => {
  const { locale } = useSelector(optionsSelector);

  const host = getFlixTldFromHostname(document.location.hostname) || 'global.flixbus.com';
  const href = `https://${host}/bus-routes`;

  return (
    <a
      className={styles.mapLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={emitSearchMaskMapEvent}
    >
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={locale === 'tr' ? trThumbnail : globalThumbnail}
          alt="map"
        />
      </div>

      <div>
        <p className={styles.title}>{title}</p>
        <span className={cn(styles.link, 'smhc-link')}>{text}</span>
      </div>
    </a>
  );
};

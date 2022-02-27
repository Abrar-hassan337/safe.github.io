import { useEffect } from 'react';

export const useFixBody = (...params: boolean[]) => {
  useEffect(() => {
    let bodyPosition: string | undefined = undefined;
    let bodyScrollTop: number | undefined = undefined;
    if (params.every(Boolean)) {
      bodyScrollTop = document.body.scrollTop;
      bodyPosition = document.body.style.position;
      document.body.style.position = 'fixed';
    }
    return function () {
      if (typeof bodyScrollTop !== 'undefined') document.body.scrollTop = bodyScrollTop;
      if (typeof bodyPosition !== 'undefined') document.body.style.position = bodyPosition;
    };
  }, params);
};

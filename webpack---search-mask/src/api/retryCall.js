import {
    isDevelopment
} from 'app/functions/environment';
import {
    getNotifier
} from 'app/service';

export const retryCall = (fn, retriesLeft = 10, interval = 1000) =>
    new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(error);

                        if (!isDevelopment()) {
                            getNotifier().notify(error);
                        }

                        return;
                    }

                    retryCall(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
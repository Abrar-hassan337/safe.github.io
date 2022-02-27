/**
 * getDateFromTimestampInSeconds
 *
 * returns new client date (same date for any timezone)
 * based on a timestamp in seconds of utc times
 *
 * @param {integer} timestampInSecondsUtc
 * @returns {any}
 */
export const getDateFromTimestampInSeconds = (timestampInSecondsUtc) => {
    // as timestamp is utc, add/remove offset
    const off = new Date().getTimezoneOffset();
    return new Date(Number(timestampInSecondsUtc) * 1000 + off);
};
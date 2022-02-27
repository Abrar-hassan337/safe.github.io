export const isCharterPopupActive = (passengerCount, charterOptions) =>
    charterOptions.active && passengerCount >= charterOptions.threshold;
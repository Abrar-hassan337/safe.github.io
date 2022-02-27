export const getTranslatedSummary = (summary, getTranslationFunction) =>
    Object.keys(summary)
    .map((key) => getTranslationFunction(`cart.counted.${key}`, {}, summary[key].selectedAmount))
    .join(', ');
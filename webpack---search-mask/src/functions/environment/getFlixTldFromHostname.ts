export const getFlixTldFromHostname = (hostname: string): string | null => {
  const matcher = /flix|flixbus|flixtrain/;
  if (!hostname.match(matcher)) return null;
  const domain = hostname.split('.');
  let matchIndex = -1;
  domain.forEach((x, index) => {
    if (x.match(matcher)) {
      matchIndex = index;
    }
  });
  return domain.splice(matchIndex, domain.length).join('.');
};

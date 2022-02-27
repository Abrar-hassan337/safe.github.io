export const elementIsOutOfView = <T extends HTMLElement, P extends HTMLElement>(
  element: T,
  parent: P,
): 'top' | 'bottom' | false => {
  if (element.getBoundingClientRect().bottom > parent.getBoundingClientRect().bottom) {
    return 'bottom';
  }
  if (element.getBoundingClientRect().top < parent.getBoundingClientRect().top) {
    return 'top';
  }
  return false;
};

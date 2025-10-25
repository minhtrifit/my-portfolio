import { useCallback } from 'react';

type ScrollPosition = 'start' | 'center' | 'end';

export function useScrollToId(defaultOffset = 0) {
  const scrollToId = useCallback(
    (id: string, position: ScrollPosition = 'start') => {
      const element = document.getElementById(id);

      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const offset =
          position === 'center'
            ? elementTop - window.innerHeight / 2 + element.offsetHeight / 2 - defaultOffset
            : position === 'end'
            ? elementTop + element.offsetHeight - window.innerHeight - defaultOffset
            : elementTop - defaultOffset;

        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    },
    [defaultOffset],
  );

  return scrollToId;
}

import type { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { top: 0, left: 0 };
    }

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 208; // width of the dropdown (w-60 = 15rem = 240px)

    //   initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    //   check if dropdown would go off the right edge of the viewport
    if (left + dropdownWidth > window.innerWidth) {
      //   Align to right edge of button insted
      left = rect.right + window.scrollX - dropdownWidth;

      //   If still off-screen, align to the right edge of viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };
  return { getDropdownPosition };
};

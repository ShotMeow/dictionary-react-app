import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { createFocusTrap } from "focus-trap";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
  shown: boolean;
}

export const Dropdown: FC<PropsWithChildren<Props>> = ({
  onShownChange,
  shown,
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
    });

    shown && trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [shown]);

  useEffect(() => {
    const documentClickListener = () => {
      onShownChange(false);
    };

    document.addEventListener("click", documentClickListener);

    return () => {
      document.removeEventListener("click", documentClickListener);
    };
  }, [onShownChange]);

  useEffect(() => {
    onShownChange(shown);
  }, [shown, onShownChange]);

  return (
    <div
      className={classNames(
        {
          hidden: !shown,
        },
        `absolute right-0 top-10 ${className}`
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

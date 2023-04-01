import NextLink from "next/link";
import clsx from "clsx";

interface LinkProps {
  arrow?: boolean;
  className?: string;
  href: any;
  children: React.ReactNode;
  disabled?: boolean;
  disabledClassName?: string;
}

export default function Link({
  arrow = false,
  className,
  href,
  disabled,
  disabledClassName,
  children,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={disabled ? "#" : href}
      {...props}
      className={clsx(
        "flex w-max group gap-2",
        className,
        disabled && disabledClassName,
        !disabled && "text-dark"
      )}
      aria-disabled={disabled}
    >
      <span
        className={clsx(
          "transition-transform",
          !disabled && "group-hover:translate-x-[0.65rem]"
        )}
      >
        {children}
      </span>
      <span
        className={clsx(
          "inline-block transition",
          !disabled && "group-hover:translate-x-[2rem] group-hover:text-primary"
        )}
      >
        &rarr;
      </span>
    </NextLink>
  );
}

import React from "react";

interface ICard extends React.HTMLAttributes<any> {
  children: React.ReactNode;
  className: string;
  hasShadow?: boolean;
}

export default function Card({
  children,
  className,
  hasShadow,
  ...rest
}: ICard) {
  return (
    <div className={`${hasShadow && "shadow-lg"} ${className}`} {...rest}>
      {children}
    </div>
  );
}

import { ButtonHTMLAttributes } from 'react';

export default function Button({
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return disabled ? (
    <button
      disabled
      className="p-3 text-xl bg-gradient-to-br from-gray-400 to-gray-200 rounded-xl"
    >
      {children}
    </button>
  ) : (
    <button
      {...props}
      className="p-3 text-xl bg-gradient-to-br from-green-400 to-green-200 rounded-xl transition-all hover:scale-105"
    >
      {children}
    </button>
  );
}

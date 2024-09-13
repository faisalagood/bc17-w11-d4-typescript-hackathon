import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

export default function Button({ onClick, disabled, children, className, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
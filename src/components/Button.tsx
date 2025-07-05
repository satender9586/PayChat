import type { ButtonProps } from '../types/button'

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-1 rounded-md font-serif bg-[#FFE492] text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

export default Button

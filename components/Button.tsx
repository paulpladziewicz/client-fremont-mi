interface Props {
  text: string;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
  className,
  text,
  onSubmit,
  type,
  disabled,
  onClick
}) => {
  return (
    <button
      className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      type={type}
      onSubmit={onSubmit}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

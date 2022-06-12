import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';

interface Props {
  label?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  className?: string;
  value?: string;
  error?: boolean | '' | undefined;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  autocomplete?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type = 'text',
  name,
  className,
  value,
  error,
  errorMessage,
  onChange,
  onBlur,
  autocomplete
}) => {
  const divStyles = classNames(className);

  const renderErrorMessage = error ? (
    <div className='text-sm mt-1 text-red-600'>{errorMessage}</div>
  ) : null;

  return (
    <div className={divStyles}>
      <label
        htmlFor={name}
        className='block text-base font-medium text-gray-700 mb-1'
      >
        {label}
      </label>
      <input
        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autocomplete}
      />
      {renderErrorMessage}
    </div>
  );
};

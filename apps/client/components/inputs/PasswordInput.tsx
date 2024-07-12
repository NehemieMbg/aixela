'use client';

import { ControllerRenderProps } from 'react-hook-form';
import { Input } from '../ui/input';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';
import React from 'react';

interface PasswordInputProps {
  field: ControllerRenderProps<any, any>; // Make it generic
}

/**
 * PasswordInput component is a custom input field for password with eye icon
 * @param field - field is the object that contains the input value and onChange function
 * @returns - returns the password input field with eye icon
 */
const PasswordInput = ({ field }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input {...field} type={showPassword ? 'text' : 'password'} />

      <div
        onClick={() => setShowPassword((prev) => !prev)}
        className={cn(
          'absolute top-1/2 h-12 flex items-center -translate-y-1/2 right-2.5 p-1.5 rounded-md cursor-pointer text-app-gray-200',
          {
            hidden: field.value === '',
          }
        )}
      >
        {!showPassword && <EyeIcon className={cn('size-5')} />}
        {showPassword && <EyeSlashIcon className={cn('size-5')} />}
      </div>
    </div>
  );
};

export default PasswordInput;

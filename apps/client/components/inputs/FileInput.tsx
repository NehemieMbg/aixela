import React from 'react';
import { useController, Control } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

interface FileInputProps {
  control: Control<any>;
  name: string;
  label: string;
  accept: string;
}

const FileInput: React.FC<FileInputProps> = ({
  control,
  name,
  label,
  accept,
}) => {
  const {
    field: { onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    onChange(file);
  };

  return (
    <FormItem>
      <FormLabel className="text-app-gray-300">{label}</FormLabel>
      <FormControl>
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          onBlur={onBlur}
          className="input"
        />
      </FormControl>
      {error && <FormMessage>{error.message}</FormMessage>}
    </FormItem>
  );
};

export default FileInput;

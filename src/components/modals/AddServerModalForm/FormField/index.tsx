import {Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea} from '@chakra-ui/react';
import React from 'react';

interface FormField {
    name: string;
    hook: (field: string, value: any, shouldValidate?: boolean) => void;
    title?: string;
    placeholder?: string;
    helperText?: string;
    error?: string;
    type?: 'input' | 'textarea' | 'checkbox';
}

// eslint-disable-next-line no-unused-vars
export const FormField = ({name, hook, title, placeholder, helperText, error = '', type = 'input'}: FormField) => {
  const [touched, setTouched] = React.useState(false);

  return (
    <FormControl>
      {type != 'checkbox' && title && <FormLabel htmlFor={name}>{title}</FormLabel>}

      {type === 'input' && <Input onClick={() => {
        setTouched(true);
      }} id={name} placeholder={placeholder} onChange={(e) => hook(name, e.target.value)}/>}
      {type === 'textarea' && <Textarea onClick={() => {
        setTouched(true);
      }} id={name} placeholder={placeholder} onChange={(e) => hook(name, e.target.value)}/>}
      {type === 'checkbox' && <Checkbox id={name} placeholder={placeholder} onChange={(e) => {
        setTouched(true);
        hook(name, e.target.checked);
      }}>{title}</Checkbox>}

      {(touched && error.length > 0) ? <FormHelperText textColor={'brand.50'}>{error}</FormHelperText> : <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

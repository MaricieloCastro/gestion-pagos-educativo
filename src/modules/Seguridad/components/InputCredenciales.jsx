import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const InputCredenciales = (props) => {
  const {
    control,
    name,
    labelText,
    type,
    placeholder,
    icon,
    classNameFormItem,
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={classNameFormItem}>
          <FormLabel className="text-white-texto text-base cursor-pointer">
            {labelText}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className="pr-10 text-base"
              {...field}
              icon={icon}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputCredenciales;

import React from "react";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function formulario(props) {
  const { nameLabel, form, parametros, type, disabled, dato } = props;
  function handleInputChange(event) {
    setInputValue(event.target.value.toUpperCase());
  }

  //Para convertir en mayuscula
  //const [inputValue, setInputValue] = useState("");
  return (
    <FormField
      control={form.control}
      name={parametros}
      render={({ field }) => (
        //Nombre
        <FormItem>
          <FormLabel>{nameLabel}</FormLabel>
          <FormControl>
            <Input
              //placeholder={dato}
              {...field}
              type={type}
              //onChange={handleInputChange}
              disabled={disabled}
              //value={inputValue}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

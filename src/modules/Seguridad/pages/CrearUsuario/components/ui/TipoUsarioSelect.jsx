import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function TipoUsarioSelect(props) {
  const { form, dato, disabled } = props;
  return (
    <FormField
      control={form.control}
      name="tipo_usuario"
      render={({ field }) => (
        <FormItem>
          <FormLabel>TIPO USUARIO:</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={dato}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder=" " />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="SECRETARIA">SECRETARIA</SelectItem>
              <SelectItem value="DIRECTOR">DIRECTOR</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
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
  // console.log(typeof dato.nombre);
  return (
    <FormField
      control={form.control}
      name="id_tipo_usuario"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tipo Usuario:</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={dato.nombre}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value={2}>SECRETARIA</SelectItem>
              <SelectItem value={1}>DIRECTOR</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

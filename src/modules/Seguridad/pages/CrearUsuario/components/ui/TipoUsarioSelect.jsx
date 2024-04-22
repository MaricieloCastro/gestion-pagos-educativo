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
  //console.log(dato.nombre);
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

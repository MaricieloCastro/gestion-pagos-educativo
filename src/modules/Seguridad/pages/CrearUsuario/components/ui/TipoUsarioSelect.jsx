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
  //console.log(dato);
  let valor = dato.nombre;
  return (
    <FormField
      control={form.control}
      name="id_tipo_usuario"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tipo Usuario:</FormLabel>
          <Select
            defaultValue={valor}
            onValueChange={field.onChange}
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

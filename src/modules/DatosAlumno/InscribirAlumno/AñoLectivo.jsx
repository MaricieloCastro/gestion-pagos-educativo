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

export function AñoLectivoSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  // let valor = dato.nombre;
  return (
    <FormField
      control={form.control}
      name="departamento"
      render={({ field }) => (
        <FormItem>
          <FormLabel>AÑO LECTIVO:</FormLabel>
          <Select
            // defaultValue={valor}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="1">1°</SelectItem>
              <SelectItem value="2">2°</SelectItem>
              <SelectItem value="3">3°</SelectItem>
              <SelectItem value="4">4°</SelectItem>
              <SelectItem value="5">5°</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

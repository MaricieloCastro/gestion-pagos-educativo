import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TipoUsarioSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo Usuario</SelectLabel>
          <SelectItem value="null"> </SelectItem>
          <SelectItem value="secretaria">SECRETARIA</SelectItem>
          <SelectItem value="director">DIRECTOR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

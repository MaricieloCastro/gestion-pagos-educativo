"use client";
import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
export function RadioGroupForm(props) {
  // const form = useForm({
  //   resolver: zodResolver(FormSchema),
  // });

  const { form, dato, disabled, url } = props;

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const select = await axios.get(`${url}`);
        setItem(select.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (loading) {
    return (
      <FormItem className="space-y-3">
        <FormControl>
          <RadioGroup className="flex flex-row space-y-1">
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="" />
              </FormControl>
              <FormLabel className="font-normal">Opciones1</FormLabel>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="" />
                </FormControl>
                <FormLabel className="font-normal">Opciones2</FormLabel>
              </FormItem>
            </FormItem>
          </RadioGroup>
        </FormControl>
      </FormItem>
    );
  }
  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
    <FormField
      control={form.control}
      name="sexo"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={dato}
              className="flex flex-row space-y-1"
              disabled={disabled}
            >
              {item.map((opcion) => (
                <FormItem
                  key={opcion.id}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={opcion.nombre.charAt(0)} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {opcion.nombre.charAt(0).toUpperCase() +
                      opcion.nombre.slice(1).toLowerCase()}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

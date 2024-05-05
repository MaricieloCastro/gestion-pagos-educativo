"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

export function RadiusBoolean(props) {
  // const form = useForm({
  //   resolver: zodResolver(FormSchema),
  // });

  const { form, dato, disabled } = props;

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
              <FormItem className="flex items-center space-x-3 space-y-0 pt-1">
                <FormControl>
                  <RadioGroupItem value="SI" />
                </FormControl>
                <FormLabel className="font-normal">SI</FormLabel>
              </FormItem>{" "}
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="NO" />
                </FormControl>
                <FormLabel className="font-normal">No</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

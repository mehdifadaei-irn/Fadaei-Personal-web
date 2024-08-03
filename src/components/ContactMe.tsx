"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { MyButton } from "./ui/MyButton";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "./ui/TextArea";
import { Label } from "./ui/Label";
import AnimatedBTN from "./AnimatedBTN";

const FormSchema = z.object({
  subject: z.string().min(2, {
    message: "subject must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export default function ContactMe() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      subject: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 text-slate-400 mt-8  "
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200 font-medium tracking-wider">
                SUBJECT
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Your Subject"
                  {...field}
                  className="hover:border-teal-600 border-1.5 cursor-pointer"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200 font-medium tracking-wider">
                EMAIL
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Your email"
                  {...field}
                  className="hover:border-teal-600 border-1.5 cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="border-teal-500">
              <FormLabel className="text-slate-200 font-medium tracking-wider">
                MESSAGE
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  className="hover:border-teal-600 border-1.5 cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedBTN />
      </form>
    </Form>
  );
}

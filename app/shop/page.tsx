"use client";

import {
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSet,
  FieldTitle,
  Input,
} from "@/components/common";

import { Field } from "@/components/common";
import { useForm } from "react-hook-form";

export default function Shop() {
  const form = useForm();

  const { handleSubmit } = form;
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="w-full max-w-md gap-4">
      {/* {simple form} */}

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <FieldSet>
          <FieldTitle className="text-2xl font-bold">
            Regular Coffee Form
          </FieldTitle>

          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input type="text" required />
            <FieldDescription>This is the name of the coffee</FieldDescription>
            <FieldError />
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" required />
            <FieldDescription>This is the email of the coffee</FieldDescription>
            <FieldError />
          </Field>

          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input type="password" required />
            <FieldDescription>
              This is the password of the coffee
            </FieldDescription>
            <FieldError />
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}

"use client";

import { actionFunction } from "@/utils/types";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { useFormState } from "react-dom";

const initialState = {
  title: "",
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      toast({ title: state.title, description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;

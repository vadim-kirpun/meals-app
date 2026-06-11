"use client";

import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="contained"
      color="secondary"
      size="large"
      disabled={pending}
    >
      {pending ? "Sharing..." : "Share Meal"}
    </Button>
  );
}

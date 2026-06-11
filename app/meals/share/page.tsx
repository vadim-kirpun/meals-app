"use client";

import { useActionState, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { PageHero } from "@/src/shared/ui/page-hero";
import { PageShell } from "@/src/shared/ui/page-shell";
import { shareMealAction, type ShareMealFormState } from "./actions";
import FileDropzone from "./FileDropzone";
import SubmitButton from "./SubmitButton";

const INITIAL_SHARE_MEAL_FORM_STATE: ShareMealFormState = {
  fieldErrors: {},
};

type ShareMealFormValues = {
  name: string;
  email: string;
  title: string;
  summary: string;
  instructions: string;
};

const INITIAL_SHARE_MEAL_FORM_VALUES: ShareMealFormValues = {
  name: "",
  email: "",
  title: "",
  summary: "",
  instructions: "",
};

export default function ShareMealPage() {
  const [formState, formAction] = useActionState(
    shareMealAction,
    INITIAL_SHARE_MEAL_FORM_STATE
  );
  const [formValues, setFormValues] = useState<ShareMealFormValues>(
    INITIAL_SHARE_MEAL_FORM_VALUES
  );
  const fieldErrors = formState?.fieldErrors ?? {};
  const message = formState?.message;

  return (
    <PageShell>
      <PageHero
        title="Share Meal"
        description="Share your favorite recipe with the community. Add a short summary, clear instructions, and a photo of the final dish."
      />

      <Box
        component="form"
        action={formAction}
        noValidate
        autoComplete="off"
        sx={{
          mt: { xs: 4, md: 6 },
          maxWidth: 760,
          mx: "auto",
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <Stack spacing={3}>
          {message && <Alert severity="error">{message}</Alert>}

          <TextField
            name="name"
            label="Your name"
            placeholder="John Doe"
            fullWidth
            required
            value={formValues.name}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, name: event.target.value }))
            }
            error={Boolean(fieldErrors.name)}
            helperText={fieldErrors.name}
          />

          <TextField
            name="email"
            type="email"
            label="Your email"
            placeholder="john@example.com"
            fullWidth
            required
            value={formValues.email}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, email: event.target.value }))
            }
            error={Boolean(fieldErrors.email)}
            helperText={fieldErrors.email}
          />

          <TextField
            name="title"
            label="Title"
            placeholder="Creamy garlic pasta"
            fullWidth
            required
            value={formValues.title}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, title: event.target.value }))
            }
            error={Boolean(fieldErrors.title)}
            helperText={fieldErrors.title}
          />

          <TextField
            name="summary"
            label="Short summary"
            placeholder="Tell people what makes this meal special"
            fullWidth
            multiline
            minRows={2}
            required
            value={formValues.summary}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, summary: event.target.value }))
            }
            error={Boolean(fieldErrors.summary)}
            helperText={fieldErrors.summary}
          />

          <TextField
            name="instructions"
            label="Instructions"
            placeholder="Describe the cooking steps"
            fullWidth
            multiline
            minRows={6}
            required
            value={formValues.instructions}
            onChange={(event) =>
              setFormValues((prev) => ({
                ...prev,
                instructions: event.target.value,
              }))
            }
            error={Boolean(fieldErrors.instructions)}
            helperText={fieldErrors.instructions}
          />

          <FileDropzone error={fieldErrors.image} />

          <Box sx={{ pt: 1 }}>
            <SubmitButton />
          </Box>
        </Stack>
      </Box>
    </PageShell>
  );
}

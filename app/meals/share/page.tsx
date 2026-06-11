import { PageHero } from "@/src/shared/ui/page-hero";
import { PageShell } from "@/src/shared/ui/page-shell";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FileDropzone from "./FileDropzone";

export default function ShareMealPage() {
  return (
    <PageShell>
      <PageHero
        title="Share Meal"
        description="Share your favorite recipe with the community. Add a short summary, clear instructions, and a photo of the final dish."
      />

      <Box
        component="form"
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
          <TextField
            name="name"
            label="Your name"
            placeholder="John Doe"
            fullWidth
            required
          />

          <TextField
            name="email"
            type="email"
            label="Your email"
            placeholder="john@example.com"
            fullWidth
            required
          />

          <TextField
            name="title"
            label="Title"
            placeholder="Creamy garlic pasta"
            fullWidth
            required
          />

          <TextField
            name="summary"
            label="Short summary"
            placeholder="Tell people what makes this meal special"
            fullWidth
            multiline
            minRows={2}
            required
          />

          <TextField
            name="instructions"
            label="Instructions"
            placeholder="Describe the cooking steps"
            fullWidth
            multiline
            minRows={6}
            required
          />

          <FileDropzone />

          <Box sx={{ pt: 1 }}>
            <Button type="submit" variant="contained" color="secondary" size="large">
              Share Meal
            </Button>
          </Box>
        </Stack>
      </Box>
    </PageShell>
  );
}

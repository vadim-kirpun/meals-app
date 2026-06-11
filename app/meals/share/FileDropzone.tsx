"use client";

import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function FileDropzone() {
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setFileName(file?.name ?? null);
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isDragActive) {
      setIsDragActive(true);
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);

    const file = event.dataTransfer.files?.[0];
    if (!file || !inputRef.current) {
      return;
    }

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    inputRef.current.files = dataTransfer.files;
    setFileName(file.name);
  };

  return (
    <Box
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        p: 2.5,
        border: "1px dashed",
        borderColor: isDragActive ? "primary.main" : "divider",
        borderRadius: 2,
        backgroundColor: isDragActive ? "action.hover" : "background.default",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "stretch", sm: "center" } }}
        >
          <Button component="label" variant="outlined" color="primary">
            Choose image
            <input
              ref={inputRef}
              name="image"
              type="file"
              accept="image/png,image/jpeg"
              hidden
              onChange={handleFileChange}
            />
          </Button>

          <Typography variant="body2" color="text.secondary">
            {fileName ? `Selected: ${fileName}` : "Drag and drop PNG/JPG, up to 5MB"}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

import type { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";

type PageCenteredContentProps = {
  children: ReactNode;
  maxWidth?: number;
  spacing?: number;
  sx?: SxProps<Theme>;
};

export default function PageCenteredContent({
  children,
  maxWidth = 560,
  spacing = 3,
  sx,
}: PageCenteredContentProps) {
  return (
    <Stack
      spacing={spacing}
      sx={{
        alignItems: "center",
        textAlign: "center",
        maxWidth,
        mx: "auto",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}

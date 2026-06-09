"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { communityPerks } from "./community-perks";

export default function CommunityPage() {
  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 10 }}>
        <Stack
          spacing={2}
          sx={{
            mb: { xs: 8, md: 12 },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography component="h1" variant="heroTitle">
            One shared passion: Food
          </Typography>

          <Typography variant="lead" sx={{ maxWidth: 520 }}>
            Join our community and share your favorite recipes!
          </Typography>
        </Stack>

        <Box component="section" aria-labelledby="community-perks-heading">
          <Typography
            id="community-perks-heading"
            component="h2"
            variant="sectionTitle"
            sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
          >
            Community Perks
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 4, md: 6 },
            }}
          >
            {communityPerks.map((perk) => (
              <Stack
                key={perk.title}
                spacing={3}
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={(theme) => ({
                    position: "relative",
                    width: "100%",
                    maxWidth: 280,
                    aspectRatio: "1 / 1",
                    borderRadius: 2,
                    overflow: "hidden",
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.35)}`,
                    backgroundColor: alpha(theme.palette.background.paper, 0.6),
                  })}
                >
                  <Image
                    src={perk.image}
                    alt={perk.alt}
                    fill
                    sizes="(max-width: 600px) 80vw, 280px"
                    style={{ objectFit: "contain", padding: "1.5rem" }}
                  />
                </Box>

                <Typography
                  component="h3"
                  variant="stepTitle"
                  sx={{ maxWidth: 260 }}
                >
                  {perk.title}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

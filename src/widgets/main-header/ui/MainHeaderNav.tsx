"use client";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/src/shared/ui/nav-link";

const navItems = [
  { href: "/meals", label: "Browse Meals" },
  { href: "/community", label: "Foodies Community" },
] as const;

export default function MainHeaderNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <Stack
        direction="row"
        spacing={0.5}
        sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
      >
        {navItems.map(({ href, label }) => (
          <NavLink key={href} href={href} label={label} />
        ))}
      </Stack>

      <IconButton
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="main-header-nav-drawer"
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          ml: "auto",
          display: { xs: "inline-flex", md: "none" },
          color: "primary.main",
        }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        id="main-header-nav-drawer"
        anchor="right"
        open={open}
        onClose={closeMenu}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              bgcolor: "background.paper",
              backgroundImage: "none",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="sectionTitle" component="p">
            Menu
          </Typography>

          <IconButton
            aria-label="Close navigation menu"
            onClick={closeMenu}
            sx={{ color: "text.secondary" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack
          spacing={0.5}
          sx={{
            p: 2,
            "& .MuiButton-root": {
              width: "100%",
              justifyContent: "flex-start",
            },
          }}
        >
          {navItems.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} onClick={closeMenu} />
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

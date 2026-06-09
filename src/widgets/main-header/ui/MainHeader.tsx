import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/src/shared/ui/nav-link";

const navItems = [
  { href: "/meals", label: "Browse Meals" },
  { href: "/community", label: "Foodies Community" },
] as const;

export default function MainHeader() {
  return (
    <Box sx={{ position: "relative" }}>
      <div className="absolute top-0 left-0 -z-10 h-[160px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160"
          className="block h-auto w-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#59453c", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8f3a09", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>

          <path
            fill="url(#gradient)"
            d="M0,128L48,120C96,112,192,96,288,91C384,85,480,91,576,93C672,96,768,96,864,91C960,85,1056,75,1152,67C1248,59,1344,53,1392,51L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", gap: 2 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                "&:hover": { opacity: 0.85 },
              }}
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                priority
              />

              <Typography component="span" variant="brandTitle">
                NextLevel Food
              </Typography>
            </Box>
          </Link>

          <Stack direction="row" spacing={0.5} sx={{ ml: "auto" }}>
            {navItems.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

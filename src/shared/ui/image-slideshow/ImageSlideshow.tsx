"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { alpha } from "@mui/material/styles";

export type SlideImage = {
  src: StaticImageData;
  alt: string;
};

type ImageSlideshowProps = {
  images: SlideImage[];
  intervalMs?: number;
};

export default function ImageSlideshow({
  images,
  intervalMs = 3000,
}: ImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  const activeSlide = images[activeIndex];

  return (
    <Box
      aria-roledescription="carousel"
      aria-label="Featured meals"
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: 2,
        overflow: "hidden",
        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.35)}`,
      })}
    >
      {images.map((image, index) => (
        <Fade key={image.src.src} in={index === activeIndex} timeout={700}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </Box>
        </Fade>
      ))}

      <Box
        aria-live="polite"
        sx={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        {activeSlide.alt}
      </Box>
    </Box>
  );
}

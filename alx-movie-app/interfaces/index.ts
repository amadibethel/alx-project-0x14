import { ReactNode } from "react";

// General reusable props
export interface ComponentProps {
  children: ReactNode;
}

// Button component props
export interface ButtonProps {
  title: string;
  onClick?: () => void; // renamed from `action` → `onClick`
}

// Local Movie type for internal components
export interface MoviesProps {
  id: string;
  primaryImage: { url: string };
  titleText: { text: string };
  releaseYear: { year: string };
}

// API response types (aligns with IMDb/other APIs)
export interface MoviesApiResponse {
  id: string;
  primaryImage?: {
    url: string;
  };
  titleText: {
    text: string;
  };
  releaseYear?: {
    year: string;
  };
}

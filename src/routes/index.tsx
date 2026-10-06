import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anil Calculator" },
      {
        name: "description",
        content:
          "Anil Calculator — a fast, lightweight, mobile-friendly calculator. Made by Anil.",
      },
      { property: "og:title", content: "Anil Calculator" },
      {
        property: "og:description",
        content:
          "Anil Calculator — a fast, lightweight, mobile-friendly calculator. Made by Anil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/calculator/index.html" });
  },
  component: () => null,
});

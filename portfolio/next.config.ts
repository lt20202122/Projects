import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // reactCompiler: true, ← Entfernen, Next.js 15 unterstützt das nicht
};

export default createNextIntlPlugin("./src/i18n.ts")(nextConfig);
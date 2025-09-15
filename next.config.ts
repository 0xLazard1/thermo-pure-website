import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  telemetry: false,
  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  /* config options here */
};

export default nextConfig;

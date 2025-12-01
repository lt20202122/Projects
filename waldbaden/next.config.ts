import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';

const nextConfig: NextConfig = {
  // Ihre Konfiguration
};

export default withBotId(nextConfig);
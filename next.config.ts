import { createCivicAuthPlugin } from "@civic/auth/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "cd961398-cf0b-4c6f-82b2-592c8ebddff2"
});

export default withCivicAuth(nextConfig)
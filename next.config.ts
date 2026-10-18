import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clickjacking defence: nothing may frame this site. If a route ever needs
  // to be embedded (widget, 3rd-party form), add a later entry for that
  // source -- the last matching header with the same key wins.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
        ],
      },
    ];
  },
};

export default nextConfig;

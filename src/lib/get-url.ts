import canUseDOM from "./can-use-dom";

export const getServerSideURL = () => {
  let url: string | undefined;

  if (!url && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (!url) {
    url = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
  }

  return url;
};

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;

    return `${protocol}//${domain}${port ? `:${port}` : ""}`;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || "";
};

export const generateTenantsURL = (tenant: string) => {
  return `${getClientSideURL()}/tenants/${tenant}`;
};

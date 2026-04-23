import { createRequestHandler } from 'react-router';
import { createStorefrontClient } from '@shopify/hydrogen';

// @ts-ignore
import * as serverBuild from './build/server';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { storefront } = createStorefrontClient({
      publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
      storeDomain: env.PUBLIC_STORE_DOMAIN,
    });

    const handler = createRequestHandler(serverBuild, 'production');
    return handler(request, { storefront, env });
  },
};

interface Env {
  PUBLIC_STORE_DOMAIN: string;
  PUBLIC_STOREFRONT_API_TOKEN: string;
}

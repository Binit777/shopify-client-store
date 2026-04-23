/// <reference types="@shopify/hydrogen/env" />

declare module '@shopify/remix-oxygen' {
  interface AppLoadContext {
    env: Env;
    storefront: import('@shopify/hydrogen').Storefront;
  }
}

# OrgGreen React storefront

React 19 + Vite frontend using the supplied botanical design and the 20 products observed at orggreen.e-comtag.com on 25 October 2026. Product names, pack sizes, prices and original catalog images are included locally. The hero is generated artwork.

## Run

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
npm run test:sites
```

## Screens and flows
Home, catalog, category and price filters, search, sort, product details, favourites, cart quantity/removal, delivery form, separate billing address, demo payment selection, order confirmation, printable receipt and local order history. Hash routes support static hosting.

Cart, favourites and demo orders persist in browser localStorage. Address entry is kept in memory until a demo order is placed, then saved with the order locally. Use sample data only. Payment information is never collected. Receipt is explicitly a demo and not a tax invoice. ₹59 delivery below ₹599 is a demo assumption; free delivery threshold comes from the source site. Fonts use Google Fonts with local fallbacks.

## Production integration still needed
Backend catalog/inventory, authentication, server order validation, authoritative shipping/tax calculation, payment provider, real invoices and fulfilment. Do not treat localStorage orders as real orders. Source catalog image content is retained as supplied, including its original packaging illustrations.

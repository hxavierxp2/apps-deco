// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $0 from "./functions/requestToParam.ts";
import * as $$$0 from "./loaders/options/urlParams.ts";
import * as $$$1 from "./loaders/redirects.ts";
import * as $$$2 from "./loaders/redirectsFromCsv.ts";
import * as $$$3 from "./loaders/fonts/googleFonts.ts";
import * as $$$4 from "./loaders/fonts/local.ts";
import * as $$$5 from "./loaders/asset.ts";
import * as $$$6 from "./loaders/secret.ts";
import * as $$$7 from "./loaders/image.ts";
import * as $$$8 from "./loaders/extension.ts";
import * as $$$9 from "./loaders/redirect.ts";
import * as $$$10 from "./loaders/pages.ts";
import * as $$$11 from "./loaders/secretString.ts";
import * as $$$$0 from "./handlers/fresh.ts";
import * as $$$$1 from "./handlers/router.ts";
import * as $$$$2 from "./handlers/proxy.ts";
import * as $$$$3 from "./handlers/sitemap.ts";
import * as $$$$4 from "./handlers/redirect.ts";
import * as $$$$$0 from "./pages/Page.tsx";
import * as $$$$$$0 from "./sections/Analytics/Analytics.tsx";
import * as $$$$$$1 from "./sections/Rendering/Deferred.tsx";
import * as $$$$$$2 from "./sections/Seo/Seo.tsx";
import * as $$$$$$$0 from "./matchers/multi.ts";
import * as $$$$$$$1 from "./matchers/random.ts";
import * as $$$$$$$2 from "./matchers/cron.ts";
import * as $$$$$$$3 from "./matchers/environment.ts";
import * as $$$$$$$4 from "./matchers/host.ts";
import * as $$$$$$$5 from "./matchers/negate.ts";
import * as $$$$$$$6 from "./matchers/userAgent.ts";
import * as $$$$$$$7 from "./matchers/date.ts";
import * as $$$$$$$8 from "./matchers/cookie.ts";
import * as $$$$$$$9 from "./matchers/always.ts";
import * as $$$$$$$10 from "./matchers/never.ts";
import * as $$$$$$$11 from "./matchers/device.ts";
import * as $$$$$$$12 from "./matchers/location.ts";
import * as $$$$$$$13 from "./matchers/site.ts";
import * as $$$$$$$$0 from "./flags/audience.ts";
import * as $$$$$$$$1 from "./flags/everyone.ts";
import * as $$$$$$$$2 from "./flags/flag.ts";
import * as $$$$$$$$3 from "./flags/multivariate.ts";
import * as $$$$$$$$4 from "./flags/multivariate/message.ts";
import * as $$$$$$$$5 from "./flags/multivariate/page.ts";
import * as $$$$$$$$6 from "./flags/multivariate/section.ts";
import * as $$$$$$$$$0 from "./actions/secrets/encrypt.ts";

const manifest = {
  "functions": {
    "website/functions/requestToParam.ts": $0,
  },
  "loaders": {
    "website/loaders/asset.ts": $$$5,
    "website/loaders/extension.ts": $$$8,
    "website/loaders/fonts/googleFonts.ts": $$$3,
    "website/loaders/fonts/local.ts": $$$4,
    "website/loaders/image.ts": $$$7,
    "website/loaders/options/urlParams.ts": $$$0,
    "website/loaders/pages.ts": $$$10,
    "website/loaders/redirect.ts": $$$9,
    "website/loaders/redirects.ts": $$$1,
    "website/loaders/redirectsFromCsv.ts": $$$2,
    "website/loaders/secret.ts": $$$6,
    "website/loaders/secretString.ts": $$$11,
  },
  "handlers": {
    "website/handlers/fresh.ts": $$$$0,
    "website/handlers/proxy.ts": $$$$2,
    "website/handlers/redirect.ts": $$$$4,
    "website/handlers/router.ts": $$$$1,
    "website/handlers/sitemap.ts": $$$$3,
  },
  "pages": {
    "website/pages/Page.tsx": $$$$$0,
  },
  "sections": {
    "website/sections/Analytics/Analytics.tsx": $$$$$$0,
    "website/sections/Rendering/Deferred.tsx": $$$$$$1,
    "website/sections/Seo/Seo.tsx": $$$$$$2,
  },
  "matchers": {
    "website/matchers/always.ts": $$$$$$$9,
    "website/matchers/cookie.ts": $$$$$$$8,
    "website/matchers/cron.ts": $$$$$$$2,
    "website/matchers/date.ts": $$$$$$$7,
    "website/matchers/device.ts": $$$$$$$11,
    "website/matchers/environment.ts": $$$$$$$3,
    "website/matchers/host.ts": $$$$$$$4,
    "website/matchers/location.ts": $$$$$$$12,
    "website/matchers/multi.ts": $$$$$$$0,
    "website/matchers/negate.ts": $$$$$$$5,
    "website/matchers/never.ts": $$$$$$$10,
    "website/matchers/random.ts": $$$$$$$1,
    "website/matchers/site.ts": $$$$$$$13,
    "website/matchers/userAgent.ts": $$$$$$$6,
  },
  "flags": {
    "website/flags/audience.ts": $$$$$$$$0,
    "website/flags/everyone.ts": $$$$$$$$1,
    "website/flags/flag.ts": $$$$$$$$2,
    "website/flags/multivariate.ts": $$$$$$$$3,
    "website/flags/multivariate/message.ts": $$$$$$$$4,
    "website/flags/multivariate/page.ts": $$$$$$$$5,
    "website/flags/multivariate/section.ts": $$$$$$$$6,
  },
  "actions": {
    "website/actions/secrets/encrypt.ts": $$$$$$$$$0,
  },
  "name": "website",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;

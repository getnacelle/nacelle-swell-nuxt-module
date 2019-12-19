# nacelle-swell-nuxt-module

Adds Vue.js components for integrating [Swell](https://www.swellrewards.com/) loyalty and referrals in your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

* A Nacelle project set up locally. See https://docs.getnacelle.com for getting started.
* A Swell app installed and setup on your Shopify store.

## Setup

### Add Module to Nacelle

Once you hace Nacelle and Swell set up you can install this module in your project from `npm`:

```
npm install @nacelle/nacelle-swell-nuxt-module --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-swell-nuxt-module` to the array. It should look something like this:

```
modules: [
  '@nuxtjs/pwa',
  '@nuxtjs/dotenv',
  '@nacelle/nacelle-nuxt-module',
  '@nuxtjs/sitemap',
  '@nacelle/nacelle-swell-nuxt-module'
],
```

### Add the components to your 
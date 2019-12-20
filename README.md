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

Then add your Swell GUID to your environment variables `.env` file.
[![N|Solid](./swell_settings_guid.png)](./swell_settings_guid.png)
```
SWELL_GUID=xxxxxxxxxxxxx
```

### Add the components to your 


```
{% if customer %}
    <script>
      function setCookie(name,value,days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days*24*60*60*1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      }
      if (document.cookie) {
        var swellUser = {
          customerId: {{ customer.id }},
          customerEmail: '{{ customer.email }}',
          customerTags: {{ customer.tags | json }}
        };
		    setCookie('nacelle_swell_user', btoa(JSON.stringify(swellUser)), 30)
      }
    </script>
{% endif %}
```
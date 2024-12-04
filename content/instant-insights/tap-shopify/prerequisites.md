---
title: Prerequisites
permalink: /instant-insights/tap-shopify/prerequisites
parent: Shopify
grand_parent: Instant Insights
nav_order: 1

---

# Shopify {{page.title}}

---

## Requirements

There are two settings that you are required to provide to use our Shopify data source. These are your Access Token and Store.

### Getting your credentials

To read data from your store, you need a Shopify access token.

For a single store, Shopify recommends you create a [Custom App](https://help.shopify.com/en/manual/apps/app-types/custom-apps){:target="_blank" data-proofer-ignore="true"}

1. Log in to your Shopify store admin at https://<store>.myshopify.com/admin

2. Click “Apps” in the menu

3. Click “Develop apps for your store” in the "Build custom apps for your unique needs" section

4. Click the “Create an app” button and give you app a name.

5. Next you need to "Configure Admin API scopes" with read access to all resources you require. e.g. `read_locales,read_products,read_orders,read_locations,read_inventory,read_fulfillments,read_customers`

6. Finally, in "API credentials" tab, click "Install app" button.  Copy the *Admin API access token*

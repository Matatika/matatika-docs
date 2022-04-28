---
layout: default
title: Prerequisites
permalink: /data-sources/tap-spotify/prerequisites
parent: Spotify
grand_parent: Data Sources
nav_order: 1

---

# Spotify {{page.title}}

---

## Requirements

There are three settings that you are required to provide to use our Spotify data source. These are your Client ID, Client Secret and Refresh Token.


### Getting your credentials

To get your Spotify credentials we suggest following this postman example: [Shopify Postman Collection](https://documenter.getpostman.com/view/583/spotify-playlist-generator/2MtDWP).

You will need to completed only step `1. SPOTIFY` of SETUP THE ENVIRONMENT, and the only setting you will need to change is to the `Scope` setting where we require `user-top-read`.

Once you have followed the above example to the part where you click on `Get New Access Token` go through the OAuth flow, then copy the Refresh Token shown to you in the pop up.

---
title: Security
description: Guide to how Matatika API uses authorisation to prevent unwanted access to your data.
permalink: /security
nav_order: 6
---

# {{page.title}}

The Matatika App and API uses authorisation tokens to provide access to users and authorised 3rd parties.
{: .fs-5 }

---

## Application Token

You don't need to think about these.  We regularly refresh your application access token and provide seamless secure access for your users.


## Getting a Developer Token

You can obtain an API Bearer token [here]({{site.matatika.links.app}}/api-key).
- This token will be valid for **2 hours** under the condition that the user remains logged into the app
- If the user logs out of the app during the token's active period or the token expires, the token is revoked and a new one will be issued on a subsequent sign-in

![api keys in the matatika app](assets/img/app-api-keys.png)


## API Authentication

Your custom applications or 3rd party applications that need to access the Matatika API will need to create access tokens and manage the refresh of this token.

You can manage your API Keys [here]({{site.matatika.links.app}}/api-key).

Read more about integrating with the Matatika API [here](how-to-guides/use-the-matatika-api/integrate-with-the-matatika-api) 

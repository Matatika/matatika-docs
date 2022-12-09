---
title: Security
permalink: /security
nav_order: 5
---

# {{page.title}}

The Matatika API uses authorisation to both secure and prevent unwanted access to your data.
{: .fs-5 }

---

## Getting a Token

You can obtain an API Bearer token [here]({{site.matatika.links.app}}/api-key).
- This token will be valid for **2 hours** under the condition that the user remains logged into the app
- If the user logs out of the app during the token's active period or the token expires, the token is revoked and a new one will be issued on a subsequent sign-in

![api keys in the matatika app](assets/img/app-api-keys.png)

---
layout: default
title: Links
permalink: /links
nav_order: 8
---

# {{page.title}}

The Matatika API uses link relations to communicate the capabilites of our resources.  Where you see a link with one of the following relations, you can expect our API to act accordingly provided nothing has changed in the meantime.
{: .fs-5 }

---

`create`

Make a POST request to this link to create a new resource.  Expect 201 'Created' response if the request to create a new resource was successful.


`update`

Make a PUT request to this link to update a resource.  Expect 200 'OK' to indicates the request to update the resource was successful.

---
layout: default
title: Test
permalink: /endpoints/test
parent: Endpoints
nav_order: 5
---

- Node.js
{: .tab .tabs-section-start}

`node snippet`

Maybe some text...

`another node snippet`

- Python (requests)
{: .tab}

{% include snippets/workspaces/view-a-workspace/python-requests.md %}

Wow - multi-line snippets now work because *include* is not indented!

- cURL
{: .tab}

{% include snippets/workspaces/view-a-workspace/curl-request.md %}

Single-line snippets work - let's try adding another...

{% include snippets/workspaces/view-a-workspace/curl-request.md %}
{: .tabs-section-end}
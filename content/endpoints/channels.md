---
layout: default
title: Channels
permalink: /endpoints/channels
parent: Endpoints
nav_order: 4
components: request-md-components/channels
---

# {{page.title}}

---

## Channel Object
{: .no_toc }

### Schema

Path | Type | Description
---- | ---- | -----------
`placeholder` | `placeholder` | placeholder

### Example Resource

GET
{:.label .label-GET}

/api/channels/{channel-id}
{:.path .path-GET}

{% include snippets/channels/view-a-channel/response-body.md %}

---

#### Requests

- TOC
{: toc}

---

{% include request-md-components/channels/view-a-channel.md %}
{% include request-md-components/channels/view-all-channels-in-a-workspace.md %}

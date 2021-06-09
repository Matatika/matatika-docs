---
layout: default
title: Search
permalink: /api/resources/search
parent: Resources
grand_parent: API
nav_order: 10
components: request-md-components/search
---

# {{page.title}}

[Datasets](datasets) can be searched for within their containing [workspace](workspaces). Searches can filter datasets by arbitrary text, [channel](channels) name, or [tag](tags) name.
{: .fs-5 }

See [here]({{site.baseurl}}/links#search) for more information on constructing a search filter query.

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/search-for-datasets-in-a-workspace-by-free-text.md %}
{% include {{ page.components }}/search-for-datasets-in-a-workspace-by-channel-name.md %}
{% include {{ page.components }}/search-for-datasets-in-a-workspace-by-tag-name.md %}

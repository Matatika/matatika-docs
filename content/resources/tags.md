---
layout: default
title: Tags
permalink: /resources/tags
parent: Resources
nav_order: 8
components: request-md-components/tags
---

# {{page.title}}

Tags are hash-prefixed keywords or phrases that appear in the title and/or description of a dataset. Tags can be used to index datasets by their contained tags with a search, which allows for topical dataset categorisation.
{: .fs-5 }

---

## Profile Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The tag ID 
`name` | `String` | The tag name
`usage` | `Integer` | Number of times the tag is used within the workspace

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/tags/{tag-id}
{:.path .path-GET}

{% include snippets/api/tags/view-a-tag-in-a-workspace/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-tags-in-a-workspace.md %}
{% include {{ page.components }}/view-a-tag-in-a-workspace.md %}

#### See Also

- [Search for datasets in a workspace by tag name](search#search-for-datasets-in-a-workspace-by-tag-name)

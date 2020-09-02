---
layout: default
title: Workspaces
permalink: /resources/workspaces
parent: Resources
nav_order: 2
components: request-md-components/workspaces
---

# {{page.title}}

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.
{: .fs-5 }

---

## Workspace Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The workspace ID
`name` | `String` | The workspace name
`domains` | `String` | The workspace allowed domains
`defaultWorkspace` | `Boolean` | The workspace default status for the calling user

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/workspaces/view-a-workspace/response-body.md %}

---

#### Requests

- TOC
{: toc}

---

{% include {{page.components}}/view-all-workspaces.md %}
{% include {{page.components}}/view-a-workspace.md %}
{% include {{page.components}}/initialise-a-workspace.md %}
{% include {{page.components}}/create-a-workspace.md %}
{% include {{page.components}}/update-a-workspace.md %}
{% include {{page.components}}/delete-a-workspace.md %}
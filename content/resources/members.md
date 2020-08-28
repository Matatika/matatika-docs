---
layout: default
title: Members
permalink: /resources/members
parent: Resources
nav_order: 4
components: request-md-components/members
---

# {{page.title}}

Members are users that belong to a particular [workspace](workspaces). Every member is derived from a corresponding [profile](profiles#profile-object), inheriting its `id` and `name`. Within the scope of a workspace, each member is visible to one another, so operating with a reduced property set allows for enhanced data security.
{: .fs-5 }

---

## Member Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The member ID (derived from corresponding profile ID)
`name` | `String` | The member name (derived from corresponding profile name)

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

{% include snippets/workspaces/view-a-member-of-a-workspace/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-members-of-a-workspace.md %}
{% include {{page.components}}/view-a-member-of-a-workspace.md %}

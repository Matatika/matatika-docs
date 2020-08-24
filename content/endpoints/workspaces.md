---
layout: default
title: Workspaces
permalink: /endpoints/workspaces
parent: Endpoints
nav_order: 2
components: request-md-components/workspaces
---

# {{page.title}}

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.
{: .fs-5 }

---

## Workspace Object
{: .no_toc}

A Workspace object contains information about a workspace.

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


## Member Object
{: .no_toc}

A Member object contains information about a member of a workspace. Member object properties are derived from a corresponding profile.

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
{: toc}

---

{% include {{page.components}}/view-all-ws.md %}
{% include {{page.components}}/view-ws.md %}
{% include {{page.components}}/initialise-ws.md %}
{% include {{page.components}}/create-update-ws.md %}
{% include {{page.components}}/delete-ws.md %}
{% include {{page.components}}/view-ws-members.md %}
{% include {{page.components}}/view-ws-member.md %}
{% include {{page.components}}/view-ws-invitations.md %}
{% include {{page.components}}/create-ws-invitation.md %}
{% include {{page.components}}/cancel-ws-invitation.md %}
{% include {{page.components}}/view-ws-channels.md %}
{% include {{page.components}}/view-ws-datasets.md %}
{% include {{page.components}}/view-ws-datasets-by-channel-id.md %}
{% include {{page.components}}/view-ws-datasets-by-channel-name.md %}
{% include {{page.components}}/publish-ws-dataset.md %}

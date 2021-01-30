---
layout: default
title: Workspaces
permalink: /resources/workspaces
parent: Resources
nav_order: 2
components: request-md-components/workspaces
---

# {{page.title}}

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for separating profiles based on the data they require access to.
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
`repositoryUrl` | `String` | The workspace repository URL
`defaultWorkspace` | `Boolean` | The workspace default status for the calling user

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/api/workspaces/view-a-workspace/response-body.md %}

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

#### See Also

- [Set a workspace as default](profiles#set-a-workspace-as-default)
- [View all invitations to a workspace](invitations#view-all-invitations-to-a-workspace)
- [Create an invitation to a workspace](invitations#create-an-invitation-to-a-workspace)
- [Cancel an invitation to a workspace](invitations#cancel-an-invitation-to-a-workspace)
- [View all members of a workspace](members#view-all-members-of-a-workspace)
- [View a member of a workspace](members#view-a-member-of-a-workspace)
- [View all channels in a workspace](channels#view-all-channels-in-a-workspace)

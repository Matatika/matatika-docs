---
layout: default
title: Invitations
permalink: /resources/invitations
parent: Resources
nav_order: 3
components: request-md-components/invitations
---

# {{page.title}}

Invitations allow access to private workspaces. When an invitation is created, an email containing an access link to the workspace will be sent to the recipient.
{: .fs-5 }

---

## Invitation Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The invitation ID
`created` | `String` | Timestamp denoting when the invitation was created
`lastModified` | `String` | Timestamp denoting when the invitation was last modified
`status` | `String` | The invitation status
`email` | `String` | The invitation target email address
`creator` | [`Member object`](members#member-object) | The invitation creator
`workspace` | [`Workspace object`](workspaces#workspace-object) | The invitation target workspace

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

{% include snippets/invitations/view-all-invitations-to-a-workspace/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-sent-invitations.md %}
{% include {{ page.components }}/view-all-received-invitations.md %}
{% include {{ page.components }}/view-all-invitations-to-a-workspace.md %}
{% include {{ page.components }}/create-an-invitation-to-a-workspace.md %}
{% include {{ page.components }}/cancel-an-invitation-to-a-workspace.md %}

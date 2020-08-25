---
layout: default
title: Invitations
permalink: /endpoints/invitations
parent: Endpoints
nav_order: 3
components: request-md-components/invitations
---

# {{page.title}}

---

## Invitation Object
{: .no_toc}

An Invitation object contains information about an invitation.

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The invitation ID
`created` | `String` | Timestamp denoting when the invitation was created
`lastModified` | `String` | Timestamp denoting when the invitation was last modified
`status` | `String` | The invitation status
`email` | `String` | The invitation target email address
`creator` | `JSON Object` | The invitation creator object
`creator.id` | `String` | The invitation creator member ID
`creator.name` | `String` | The invitation creator member name

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

{% include snippets/workspaces/view-all-invitations-to-a-workspace/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include request-md-components/invitations/view-sent-invs.md %}
{% include request-md-components/invitations/view-received-invs.md %}
{% include request-md-components/workspaces/view-ws-invitations.md %}
{% include request-md-components/workspaces/create-ws-invitation.md %}
{% include request-md-components/workspaces/cancel-ws-invitation.md %}

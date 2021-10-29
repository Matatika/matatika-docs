---
layout: default
title: Channels
permalink: /api/resources/channels
parent: Resources
grand_parent: API
nav_order: 6
components: request-md-components/channels
---

# {{page.title}}

Channels enable datasets to be categorised or grouped together. A single workspace can have multiple channels.
{: .fs-5 }

---

## Objects
{: .no_toc }

### Channel

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The channel ID
`creator` | [`Member`](members#member) | | The channel creator
`workspace` | [`Workspace`](workspaces#workspace) | | The channel workspace
`created` | `String` |  ISO 8601 timestamp | The channel created at timestamp
`lastModified` | `String` | ISO 8601 timestamp | The channel last modified timestamp
`name` | `String` | | The channel name
`description` | `String` | | The channel description
`picture` | `String` | URL | The channel picture metadata

{% include snippets/api/channels/view-a-channel/response-body.md %}

---

#### Requests

- TOC
{: toc}

#### See Also

- [Subscribe to a channel](subscriptions#subscribe-to-a-channel)

---

{% include request-md-components/channels/view-a-channel.md %}
{% include request-md-components/channels/view-all-channels-in-a-workspace.md %}


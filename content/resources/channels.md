---
layout: default
title: Channels
permalink: /resources/channels
parent: Resources
nav_order: 6
components: request-md-components/channels
---

# {{page.title}}

Channels enable datasets to be categorised or grouped together. A single workspace can have multiple channels.
{: .fs-5 }

---

## Channel Object
{: .no_toc }

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The channel ID
`creator` | [`Member object`](members#member-object) | The channel creator
`workspace` | [`Workspace object`](workspaces#workspace-object) (reduced fields) | The channel workspace 
`name` | `String` | The channel name
`description` | `String` | The channel description
`picture` | `String` | The channel picture metadata

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

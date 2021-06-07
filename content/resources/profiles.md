---
layout: default
title: Profiles
permalink: /resources/profiles
parent: Resources
nav_order: 1
components: request-md-components/profiles
---

# {{page.title}}

Profiles are individual consumers of the Matatika service. A profile is automatically created for a user when they first access the app, or accept an invitation to a workspace from an existing member via email.
{: .fs-5 }

---

## Profile Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The profile ID 
`name` | `String` | The full name of the person or entity represented by this profile
`handle` | `String` | The unique @handle for this profile (generated and read-only)
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | Partial [`Workspace object`](workspaces#workspace-object) | The profile default workspace object

### Example Resource

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/api/profiles/view-a-profile/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-profiles.md %}
{% include {{page.components}}/view-a-profile.md %}
{% include {{page.components}}/create-or-update-a-profile.md %}
{% include {{page.components}}/set-a-workspace-as-default.md %}

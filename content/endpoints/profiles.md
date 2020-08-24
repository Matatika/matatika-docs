---
layout: default
title: Profiles
permalink: /endpoints/profiles
parent: Endpoints
nav_order: 1
components: request-md-components/profiles
---

# {{page.title}}
{: .no_toc }

Profiles are individual consumers of the Matatika service. A profile is automatically created for a user when they first access the app, or accept an invitation to a workspace from an existing member via email.
{: .fs-5 }

---

## Object
{: .no_toc}

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object
`defaultWorkspace.name` | `String` | If applicable, the profile default workspace name
`defaultWorkspace.domains` | `String` | If applicable, the profile default workspace allowed domains

### Example Response
{: .no_toc}

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/workspaces/view-a-workspace/response-body.md %}

---

#### Table of Contents
{: .no_toc }

- TOC
{: toc }

---

{% include {{page.components}}/view-pf.md %}
{% include {{page.components}}/create-update-pf.md %}
{% include {{page.components}}/set-pf-default-workspace.md %}

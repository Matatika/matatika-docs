---
layout: default
title: Workspaces
permalink: /workspaces
nav_order: 4
---

# Workspaces
Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.

## View workspaces
GET
{:.label .label-GET}

### Response
{% include snippets/workspaces/view-all-workspaces/response-body.md %}


## Initialise a workspace
POST
{:.label .label-POST}

> *Only profiles with the relevant permissions may initialise workspaces.*


## Create or modify a workspace
PUT
{:.label .label-PUT}

> *Only profiles with the relevant permissions may create or modify workspaces.*

### Request
#### Body
{% include snippets/workspaces/create-a-workspace/request-body.md %}

#### Schema

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The workspace name | Must not be empty
`domains` | `String` | The allowed domains for workspace access control | 

#### CURL Example
{% include snippets/workspaces/create-a-workspace/curl-request.md %}
#### HTTP Example
{% include snippets/workspaces/create-a-workspace/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/create-a-workspace/response-body.md %}

#### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The workspace ID
`name` | `String` | The workspace name
`domains` | `String` | The allowed domains for workspace access control
`defaultWorkspace` | `Boolean` | Whether or not the workspace is set as default

#### Links

Relation | Description
-------- | -----------
`self` | The current resource
`update workspace` | Update the workspace
`delete workspace` | Delete the workspace
`make workspace default` | Set the workspace as the default workspace
`profiles` | The profiles with access to the workspace


## Delete a workspace
DELETE
{:.label .label-DELETE}

> *Only profiles with the relevant permissions may delete workspaces.*


## Set a default workspace
PATCH
{:.label .label-PATCH}

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.
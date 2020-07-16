---
layout: default
title: Workspaces
permalink: /workspaces
nav_order: 4
---

# {{page.title}}

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.

<!-- ================ -->
## View all workspaces
GET
{:.label .label-GET}

### Request
#### HTTP Example
{% include snippets/workspaces/view-all-workspaces/http-request.md %}

#### cURL Example
{% include snippets/workspaces/view-all-workspaces/curl-request.md %}

### Response
#### Body
{% include snippets/workspaces/view-all-workspaces/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded.workspaces` | `Array` | A list of workspaces the profile is associated with

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

<!-- ================ -->


<!-- ================ -->
## View a workspace
GET
{:.label .label-GET}

### Request
#### HTTP Example
{% include snippets/workspaces/view-a-workspace/http-request.md %}

#### cURL Example
{% include snippets/workspaces/view-a-workspace/curl-request.md %}

### Response
#### Body
{% include snippets/workspaces/view-a-workspace/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded.workspaces` | `Array` | A list of workspaces the profile is associated with

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

<!-- ================ -->

<!-- ================ -->
## Initialise a new workspace
POST
{:.label .label-POST}

### Prerequisites
- Only profiles with the relevant permissions may initialise workspaces.

### Request
#### HTTP Example
{% include snippets/workspaces/initialise-a-workspace/http-request.md %}

#### cURL Example
{% include snippets/workspaces/initialise-a-workspace/curl-request.md %}

### Reponse
#### Body
{% include snippets/workspaces/initialise-a-workspace/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The workspace ID
`name` | `String` | The workspace name
`domains` | `String` | The allowed domains for workspace access control
`defaultWorkspace` | `Boolean` | Whether or not the workspace is set as default

#### Links

Relation | Description
-------- | -----------
`create workspace` | The resource to create the workspace

<!-- ================ -->


<!-- ================ -->
## Create or update a workspace
PUT
{:.label .label-PUT}

### Prerequisites
- A workspace is required to have been [initialised](#initialise-a-workspace) in order to create it.
- A workspace is required to have been created in order to update it.
- Only profiles with the relevant permissions may create or update workspaces.

### Request
#### Body
{% include snippets/workspaces/create-a-workspace/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The workspace name | Must not be null
`domains` | `String` | The allowed domains for workspace access control | N/A

#### cURL Example
{% include snippets/workspaces/create-a-workspace/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/create-a-workspace/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/create-a-workspace/response-body.md %}

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

<!-- ================ -->


<!-- ================ -->
## View all workspace members
GET
{:.label .label-GET}

A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Request
#### Body
#### cURL Example
{% include snippets/workspaces/view-all-workspace-members/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/view-all-workspace-members/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/view-all-workspace-members/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded.members` | `Array` | A list of the workspace members

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

<!-- ================ -->


<!-- ================ -->
## View a workspace member
GET
{:.label .label-GET}

A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Request
#### Body
#### cURL Example
{% include snippets/workspaces/view-a-workspace-member/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/view-a-workspace-member/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/view-a-workspace-member/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The member profile ID
`name` | `String` | The member profile name

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

<!-- ================ -->


<!-- ================ -->
## Delete a workspace
DELETE
{:.label .label-DELETE}

### Prerequisites
- Only profiles with the relevant permissions may delete workspaces.

### Request
#### cURL Example
{% include snippets/workspaces/delete-a-workspace/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/delete-a-workspace/http-request.md %}
<!-- ================ -->

---
layout: default
title: Workspaces
permalink: /workspaces
nav_order: 4
---

# {{page.title}}

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.

---

## View all workspaces

GET
{:.label .label-GET}

/api/workspaces
{:.path .path-GET}

Returns all workspaces.

### Request

#### cURL Example
{% include snippets/workspaces/view-all-workspaces/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

Collection of [Workspace objects](data-structures#workspace) with HAL links.

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

---

## View a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

Returns the workspace `workspace-id`.

### Prerequisites
- The user must be a member of the workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/view-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

[Workspace object](data-structures#workspace) with HAL links.

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

---

## Initialise a workspace

POST
{:.label .label-POST}

/api/workspaces
{:.path .path-POST}

Initialises a new workspace with a UUID. Post-initialisation, the workspace can be created and subsequently updated.

### Request
#### cURL Example
{% include snippets/workspaces/initialise-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-POST}

[Workspace object](data-structures#workspace) with HAL links.

#### Links

Relation | Description
-------- | -----------
`create workspace` | The resource to create the workspace

---

## Create or update a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}
{:.path .path-PUT}

Creates or updates the workspace `workspace-id`.

### Prerequisites
- The user must be the owner of workspace `workspace-id`
- The workspace must have been [initialised](#initialise-a-workspace) in order to create it
- The workspace must have been created in order to update it

### Request
#### Body
{% include snippets/workspaces/create-a-workspace/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The workspace name | Must not be null
`domains` | `String` | The allowed domains for workspace access control | N/A

#### cURL Example
{% include snippets/workspaces/create-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

201
{:.label .label-PUT}

200
{:.label .label-PUT}

[Workspace object](data-structures#workspace) with HAL links.

#### Links

Relation | Description
-------- | -----------
`self` | The current resource
`update workspace` | Update the workspace
`delete workspace` | Delete the workspace
`make workspace default` | Set the workspace as the default workspace
`profiles` | The profiles with access to the workspace

---

## View all members of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members
{:.path .path-GET}

Returns all members of the workspace `workspace-id`. A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Prerequisites
- The user must be a member of the workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/view-all-members-of-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

Collection of [Member objects](data-structures#member) with HAL links.

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

---

## View a member of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

Returns the member `member-id` of the workspace `workspace-id`.

### Prerequisites
- The user must be a member of the workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/view-a-member-of-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

[Member object](data-structures#member) with HAL links.

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

---

## Delete a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}
{:.path .path-DELETE}

Deletes the workspace `workspace-id`.

### Prerequisites
- The user must be the owner of workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/delete-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

204
{:.label .label-DELETE}

No response body provided.

---

## Create an invitation to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/invitations
{:.path .path-POST}

Creates a workspace invitation to the workspace `workspace-id`.

### Prerequisites
- The user must be a member of the workspace `workspace-id`

### Request
#### Body
{% include snippets/workspaces/create-an-invitation-to-a-workspace/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`email` | `String` | The email address of the invitation recipient | Must not be empty; must be a valid email address; email address domain must exist in the workspace's list of allowed domains

#### cURL Example
{% include snippets/workspaces/create-an-invitation-to-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

202
{:.label .label-POST}

No response body provided.

---

## View all invitations to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

Returns active invitations to the workspace `workspace-id` specific to the user. As a workspace owner, this instead returns all active invitations to the workspace across all members.

### Prerequisites
- The user must be a member of the workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/view-all-invitations-to-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

Collection of [Invitation object](data-structures#invitation) with HAL links.

---

## Cancel an invitation to a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-DELETE}

Cancels a pending invitation `invitation-id` to the workspace `workspace-id`.

### Prerequisites
- The user must be the owner of workspace `workspace-id`

### Request
#### cURL Example
{% include snippets/workspaces/cancel-an-invitation-to-a-workspace/curl-request.md %}

### Response
{:.d-inline-block}

204
{:.label .label-DELETE}

No response body provided.

---
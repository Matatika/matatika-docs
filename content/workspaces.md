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

/api/workspaces
{:.path .path-GET}

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

/api/workspaces/{workspace-id}
{:.path .path-GET}

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

/api/workspaces
{:.path .path-POST}

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

/api/workspaces/{workspace-id}
{:.path .path-PUT}

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

/api/workspaces/{workspace-id}/members
{:.path .path-GET}

A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Request
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

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Request
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

/api/workspaces/{workspace-id}
{:.path .path-DELETE}

### Prerequisites
- Only profiles with the relevant permissions may delete workspaces

### Request
#### cURL Example
{% include snippets/workspaces/delete-a-workspace/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/delete-a-workspace/http-request.md %}
<!-- ================ -->


<!-- ================ -->
## Create a workspace invitation
POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/invitations
{:.path .path-POST}

### Prerequisites
- Must be a member of the workspace

### Request
#### Body
{% include snippets/workspaces/create-a-workspace-invitation/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`email` | `String` | The email address of the invitation recipient | Must not be empty; must be a valid email address; email address domain must exist in the workspace's list of allowed domains

#### cURL Example
{% include snippets/workspaces/create-a-workspace-invitation/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/create-a-workspace-invitation/http-request.md %}

<!-- ================ -->


<!-- ================ -->
## View all workspace invitations
GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

Returns workspace-specific invitations

### Prerequisites
- Must be an owner profile

### Request
#### cURL Example
{% include snippets/workspaces/view-all-workspace-invitations/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/view-all-workspace-invitations/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/view-all-workspace-invitations/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded` | `JSON Object` | The resource collection container
`_embedded.invitations` | `Array` | A list of all the created invitations to the workspace
`_embedded.invitations.id` | `String` | The invitation ID
`_embedded.invitations.created` | `String` | A timestamp denoting when the invitation was created
`_embedded.invitations.lastModified` | `String` | A timestamp denoting when the invitation was last modified
`_embedded.invitations.status` | `String` | The current status of the invitation
`_embedded.invitations.email` | `String` | The email address the invitation is targeted at
`_embedded.invitations.creator` | `JSON Object` | The member of the workspace responsible for creating the invitation
`_embedded.invitations.creator.id` | `String` | The member profile ID
`_embedded.invitations.creator.name` | `String` | The member profile name
`_embedded.invitations._links` | `JSON Object` | The invitation resource HAL links
`_embedded.invitations._links.cancel` | `JSON Object` | Cancel the invitation
`_embedded.invitations._links.cancel.href` | `String` | The cancel invitation request URL
`_embedded.invitations._links.cancel.type` | `String` | The cancel invitation applicable HTTP method

<!-- ================ -->


<!-- ================ -->
## Cancel a workspace invitation
DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-DELETE}

Cancels an invitation

### Prerequisites
- Must be an owner profile

### Request
#### cURL Example
{% include snippets/workspaces/cancel-a-workspace-invitation/curl-request.md %}

#### HTTP Example
{% include snippets/workspaces/cancel-a-workspace-invitation/http-request.md %}

<!-- ================ -->
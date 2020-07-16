---
layout: default
title: Profiles
permalink: /profiles
nav_order: 3
---

# {{page.title}}

Description of endpoint

<!-- ================ -->
## View all profiles
GET
{: .label .label-GET}

### Request
#### HTTP Example
{% include snippets/profiles/view-all-profiles/http-request.md %}

#### cURL Example
{% include snippets/profiles/view-all-profiles/curl-request.md %}

### Response
#### Body
{% include snippets/profiles/view-all-profiles/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded.profiles` | `Array` | A list of profiles

#### Links

Relation | Description
-------- | -----------
`self` | The current resource

<!-- ================ -->


<!-- ================ -->
## View a profiles
GET
{: .label .label-GET}

### Request
#### HTTP Example
{% include snippets/profiles/view-a-profile/http-request.md %}

#### cURL Example
{% include snippets/profiles/view-a-profile/curl-request.md %}

### Response
#### Body
{% include snippets/profiles/view-a-profile/response-body.md %}

### Response
#### Body
{% include snippets/profiles/view-a-profile/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object

#### Links

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

<!-- ================ -->


<!-- ================ -->
## Create or update a profile
PUT
{: .label .label-PUT}

### Request
#### Body
{% include snippets/profiles/update-a-profile/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The profile name | Must not be empty
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address | Must not be empty; must be a valid email address

### Response
#### Body
{% include snippets/profiles/update-a-profile/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object

#### Links

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

<!-- ================ -->


<!-- ================ -->
## Set a default workspace
PATCH
{:.label .label-PATCH}

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.

### Request
#### Body
{% include snippets/profiles/set-a-workspace-as-default/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`defaultWorkspace` | `JSON Object` | Default workspace object |
`defaultWorkspace.id` | `String` | The default workspace ID | Must be a valid and existing UUID

#### cURL Example
{% include snippets/profiles/set-a-workspace-as-default/curl-request.md %}

#### HTTP Example
{% include snippets/profiles/set-a-workspace-as-default/http-request.md %}

### Response
#### Body
{% include snippets/profiles/set-a-workspace-as-default/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object
`defaultWorkspace.name` | `String` | The profile default workspace name
`defaultWorkspace.id` | `String` | The profile default workspace ID

#### Links

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

<!-- ================ -->
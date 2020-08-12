---
layout: default
title: Profiles
permalink: /endpoints/profiles
parent: Endpoints
nav_order: 1
---

# {{page.title}}
{: .no_toc }

Profiles are individual consumers of the Matatika service. A profile is automatically created for a user when they first access the app, or accept an invitation to a workspace from an existing member via email.
{: .fs-5 }

---

#### Table of Contents
{: .no_toc }

- TOC
{: toc }

<!-- 
---

## View profiles
GET
{: .label .label-GET}

/api/profiles
{:.path .path-GET}

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/profiles/view-all-profiles/curl-request.md %}

#### Python (Requests)
{: .no_toc}

### Response
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/view-all-profiles/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`_embedded.profiles` | `Array` | A list of profiles

#### Links
{: .no_toc }


Relation | Description
-------- | -----------
`self` | The current resource

---

## View a profile
GET
{: .label .label-GET}

/api/profiles/{profile-id}
{:.path .path-GET}

### Request
{: .no_toc }


#### cURL
{: .no_toc }

{% include snippets/profiles/view-a-profile/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/view-a-profile/python-requests.md %}

### Response
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/view-a-profile/response-body.md %}

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object

#### Links
{: .no_toc }


Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

-->

---

## View profile

GET
{: .label .label-GET}

/api/profiles/{profile-id}
{:.path .path-GET}

Returns the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/profiles/view-a-profile/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/view-a-profile/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

#### Body
{: .no_toc }

[Profile object]({{site.baseurl}}/data-structures#profile) with HAL links.

#### Links
{: .no_toc }

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

---

## Create or update profile

PUT
{: .label .label-PUT}

/api/profiles/{profile-id}
{:.path .path-PUT}

Creates or updates the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

### Request
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/update-a-profile/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The profile name | Must not be empty
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address | Must not be empty; must be a valid email address

#### cURL
{: .no_toc }

{% include snippets/profiles/update-a-profile/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/update-a-profile/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

201 / 200
{:.label .label-PUT}

#### Body
{: .no_toc }

[Profile object]({{site.baseurl}}/data-structures#profile) with HAL links.

#### Links
{: .no_toc }

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

---

## Set a workspace as default

PATCH
{:.label .label-PATCH}

/api/profiles/{profile-id}
{:.path .path-PATCH}

Sets a default workspace for the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.

### Request
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/set-a-workspace-as-default/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`defaultWorkspace` | `JSON Object` | Default workspace object |
`defaultWorkspace.id` | `String` | The default workspace ID | Must be a valid and existing UUID

#### cURL
{: .no_toc }

{% include snippets/profiles/set-a-workspace-as-default/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/set-a-workspace-as-default/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-PATCH}

#### Body
{: .no_toc }

[Profile object]({{site.baseurl}}/data-structures#profile) with HAL links.

#### Links
{: .no_toc }

Relation | Description
-------- | -----------
`self` | The current resource
`update profile` | Update the profile
`delete profile` | Delete the profile
`workspaces` | View the workspaces the profile is a member of
`change profile default workspace` | Set the workspace as the default workspace
`new workspace` | Initialise a new workspace

---
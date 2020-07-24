---
layout: default
title: Data Structures
permalink: /data-structures
---

# {{page.title}}
The Matatika API uses a variety of data structures as templates for both requests and responses when handling data.

## Profile
A Profile object contains information about a profile.

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The profile ID 
`name` | `String` | The profile name
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address
`defaultWorkspace` | `JSON Object` | The profile default workspace object
`defaultWorkspace.name` | `String` | If applicable, the profile default workspace name
`defaultWorkspace.domains` | `String` | If applicable, the profile default workspace allowed domains

### Example
GET
{:.label .label-GET}

/api/profile/{profile-id}
{:.path .path-GET}

{% include snippets/profiles/view-a-profile/response-body.md %}

## Workspace
A Workspace object contains information about a workspace.

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The workspace ID
`name` | `String` | The workspace name
`domains` | `String` | The workspace allowed domains
`defaultWorkspace` | `Boolean` | The workspace default status for the calling user

### Example
GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/workspaces/view-a-workspace/response-body.md %}

## Member
A Member object contains information about a member of a workspace. Member object properties are derived from a corresponding profile.

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `string` | The member ID (derived from corresponding profile ID)
`name` | `String` | The member name (derived from corresponding profile name)

### Example
GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

{% include snippets/workspaces/view-a-workspace-member/response-body.md %}

## Invitation
An Invitation object contains information about an invitation.

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The invitation ID
`created` | `String` | Timestamp denoting when the invitation was created
`lastModified` | `String` | Timestamp denoting when the invitation was last modified
`status` | `String` | The invitation status
`email` | `String` | The invitation target email address
`creator` | `JSON Object` | The invitation creator object
`creator.id` | `String` | The invitation creator member ID
`creator.name` | `String` | The invitation creator member name

### Example
GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

{% include snippets/workspaces/view-all-workspace-invitations/response-body.md %}

## Dataset
### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The dataset ID
`alias` | `String` | The dataset alias
`workspaceId` | `String` | The workspace ID of the published dataset
`channelId` | `String` | The channel ID of the published dataset
`information` | `String` | The dataset information
`description` | `String` | The dataset description
`questions` | `String` | The dataset questions
`version` | `String` | The dataset version
`rawData` | `String` | The dataset raw data
`visualization` | `String` | The dataset visualization
`query` | `String` | The dataset query

<!-- ### Example -->
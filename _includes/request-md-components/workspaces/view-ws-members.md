## View all members of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members
{:.path .path-GET}

Returns all members of the workspace `{workspace-id}`. A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/view-all-members-of-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/view-all-members-of-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Member object](workspaces#member-object) collection with HAL links.

---

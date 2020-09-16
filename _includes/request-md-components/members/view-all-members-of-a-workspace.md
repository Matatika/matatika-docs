## View all members of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members
{:.path .path-GET}

Returns all members of the workspace `{workspace-id}`. A member is a profile that belongs to particular workspace. Member resources contain only the associated profile ID and name.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/workspaces/view-all-members-of-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/workspaces/view-all-members-of-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Member object](#member-object) collection with HAL links.

---

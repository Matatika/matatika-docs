## View all liked datasets in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/liked
{:.path .path-GET}

Returns all datasets in the workspace `{workspace-id}` liked by the authenticated profile.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-datasets-in-a-workspace-liked-by-profile/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datasets/view-datasets-in-a-workspace-liked-by-profile/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataset](#dataset) collection with HAL links.
{% include snippets/api/datasets/view-datasets-in-a-workspace-liked-by-profile/response-body.md %}

---

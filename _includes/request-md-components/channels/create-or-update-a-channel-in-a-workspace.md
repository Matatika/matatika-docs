## Create or Update a channel in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/channels/{channel-id} or {channel-name}
{:.path .path-PUT}

Creates or Updates a channel in the workspace `{workspace-id}`.

This endpoint takes either a `{channel-id}` (UUID) or `{channel-name}` (String), and based on the supplied value and the channels that already exist in the workspace, will update or create a channel accordingly.

### Prerequisites
- Workspace `{workspace-id}` must exist
- The user must be a admin in the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/create-a-channel-in-a-workspace-by-id/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/channels/create-a-channel-in-a-workspace-by-id/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK / 201 Created`
{: .dummy-heading .path-PUT}

[Channel](#channel) with HAL links.
{% include snippets/api/channels/create-a-channel-in-a-workspace-by-id/response-body.md %}

---

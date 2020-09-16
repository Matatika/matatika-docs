## View all channels in a workspace

GET
{:.label .label-GET}

/api/workspace/{channel-id}/channels
{:.path .path-GET}

Returns all channels in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- The user must be a member of the workspace `{workspace-id}`

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/channels/view-all-channels-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/channels/view-all-channels-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Channel object](#channel-object) collection with HAL links.

---

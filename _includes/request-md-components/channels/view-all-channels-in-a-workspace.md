## View all channels in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/channels/{channel-id}?type={type}&source={source}&containsDataset={datasetId}
{:.path .path-GET}

Returns all channels in the workspace `{workspace-id}`.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`type` | No | string | None | Return channels by types: `list` or `source`
`source` | No | string | None | Return channels by source: `profile` or `workspace`
`containsDataset` | No | string | None | Adds a `containsDataset` boolean field to all channels returning if it contains the dataset

### Prerequisites
- Workspace `{workspace-id}` must exist
- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/view-all-channels-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/channels/view-all-channels-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Channel](#channel) collection with HAL links.
{% include snippets/api/channels/view-all-channels-in-a-workspace/response-body.md %}

---

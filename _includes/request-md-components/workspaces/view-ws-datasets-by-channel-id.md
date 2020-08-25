## View workspace datasets by channel ID

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets?channelId={channel-id}
{:.path .path-GET}

Returns all datasets of the channel `{channel-id}` in the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### cURL

`snippet placeholder`

#### Python (Requests)

`snippet placeholder`

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](datasets#dataset-object) collection with HAL links.

---

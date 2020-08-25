## View workspace datasets by channel name

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/search?q="in:{channel-name}"
{:.path .path-GET}

Returns all datasets of the channel `{channel-name}` in the workspace `{workspace-id}`.

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

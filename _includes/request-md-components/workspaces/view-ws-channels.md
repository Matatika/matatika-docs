## View all channels of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/channels
{:.path .path-GET}

Returns all channels of the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

`snippet placeholder`

#### Python (Requests)

`snippet placeholder`

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Channel object](channels#channel-object) collection with HAL links.

---

## View workspace datasets by channel ID

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets?channelId={channel-id}
{:.path .path-GET}

Returns all datasets of the channel `{channel-id}` in the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

`snippet placeholder`

#### Python (Requests)
{: .no_toc}

`snippet placeholder`

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Dataset object](datasets#dataset-object) collection with HAL links.

---

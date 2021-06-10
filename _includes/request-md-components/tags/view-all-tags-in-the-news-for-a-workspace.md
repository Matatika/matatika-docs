## View all tags in the news for a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/news/tags
{:.path .path-GET}

Returns all tags in the news for the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Tag object](#tag) collection with HAL links.

---

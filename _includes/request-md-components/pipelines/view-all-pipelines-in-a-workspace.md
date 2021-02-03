## View all pipelines in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/pipelines
{:.path .path-GET}

Returns all configured pipelines in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Pipeline object](#pipeline-object) collection with HAL links.

---

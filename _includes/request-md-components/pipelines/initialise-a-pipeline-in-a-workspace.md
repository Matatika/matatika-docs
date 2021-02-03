## Initialise a pipeline in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/pipelines
{:.path .path-POST}

Initialises a new pipeline in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Pipeline object](#pipeline-object) with HAL links.

---

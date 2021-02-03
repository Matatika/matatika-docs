## Create or update a pipeline in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/pipelines/{pipeline-id}
{:.path .path-PUT}

Creates or updates the pipeline `{pipeline-id}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The pipeline name | 
`dataSource` | `String` | The [datasource](datasources) of the pipeline |
`properties` | `String` | | 

### Response
{: .d-inline-block }

201 / 200
{:.label .label-PUT}

[Pipeline object](#pipeline-object) with HAL links.

---

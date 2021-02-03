## View all running or completed jobs for a pipeline

GET
{:.label .label-GET}

/api/pipeline/{pipeline-id}/jobs
{:.path .path-GET}

Returns all running or completed jobs for the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request
#### Headers

Key | Value | Description
--- | ----- | -----------
`enable-task-details` | `true` | Enables detailed task information in the resulting [Job object](#job-object) response
`enable-task-details` | `false` (default) | Disables detailed task information in the resulting [Job object](#job-object) response

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Job object](#job-object) collection with HAL links.

---

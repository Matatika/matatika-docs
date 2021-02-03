## Start a job from a pipeline

POST
{:.label .label-POST}

/api/pipeline/{pipeline-id}/jobs
{:.path .path-POST}

Returns all running or completed jobs for the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist and not already be running

### Request
#### Headers

Key | Value | Description
--- | ----- | -----------
`enable-task-details` | `true` | Enables detailed task information in the resulting [Job object](#job-object) response
`enable-task-details` | `false` (default) | Disables detailed task information in the resulting [Job object](#job-object) response

### Response
{: .d-inline-block }

201
{:.label .label-POST}

[Job object](#job-object) with HAL links.
{: .d-inline-block }

---

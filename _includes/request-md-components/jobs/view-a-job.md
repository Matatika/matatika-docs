## View a job

GET
{:.label .label-GET}

/api/jobs/{job-id}
{:.path .path-GET}

Returns the job `{job-id}`.

### Prerequisites
- Job `{job-id}` must exist

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

[Job object](#job-object) with HAL links.

---

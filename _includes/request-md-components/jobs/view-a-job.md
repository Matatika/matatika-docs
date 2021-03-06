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
`enable-task-details` | `true` | Enables detailed task information in the resulting [Job](#job) response
`enable-task-details` | `false` (default) | Disables detailed task information in the resulting [Job](#job) response

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/view-a-job/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/view-a-job/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Job](#job) with HAL links.

---

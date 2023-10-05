## Stop a job

PUT
{:.label .label-PUT}

/api/jobs/{job-id}/stopped
{:.path .path-PUT}

Stops the execution of the job `{job-id}`.

### Prerequisites
- Job `{job-id}` must exist
- Job `{job-id}` must have [status](#job-status) `RUNNING`

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/stop-a-job/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/jobs/stop-a-job/python-requests.md %}
{: .tabs-section-end}

### Response
`202 Accepted`
{: .dummy-heading .path-PUT}

Job stop acceptance message.
{% include snippets/api/jobs/stop-a-job/response-body.md %}

---

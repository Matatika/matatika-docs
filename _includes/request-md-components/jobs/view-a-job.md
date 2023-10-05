## View a job

GET
{:.label .label-GET}

/api/jobs/{job-id}
{:.path .path-GET}

Returns the job `{job-id}`.

### Prerequisites
- Job `{job-id}` must exist

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/view-a-job/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/jobs/view-a-job/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Job](#job) with HAL links.
{% include snippets/api/jobs/view-a-job/response-body.md %}

---

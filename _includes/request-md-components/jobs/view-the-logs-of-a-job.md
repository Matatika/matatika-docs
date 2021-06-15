## View the logs of a job

GET
{:.label .label-GET}

/api/jobs/{job-id}/logs?sequence={sequence}
{:.path .path-GET}

Returns the logs of the job `{job-id}` as a streamed response, from the sequence `{sequence}`.

### Prerequisites
- Job `{job-id}` must exist

### Request
#### Query Parameters

Parameter | Parsed Type | Default Value | Description
--------- | ----------- | ------------- | -----------
`sequence` | `Integer` | `0` | The section in the logs to read from

#### Headers

Key | Value | Description
--- | ----- | -----------
`Accept` | `application/stream+json` | Sets the response content type format to `application/stream+json`
`Accept` | `text/plain` | Sets the response content type format to `text/plain`
`Accept` | `*/*` (all other values) | Sets the response content type format to `text/plain`

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/view-the-logs-of-a-job-as-json/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/view-the-logs-of-a-job-as-json/python-requests.md %}
{: .tabs-section-end}

### Response
- `200`: The job logs in the format specified by associated request `Accept` header
- `204`: No response body provided.

{% include snippets/api/jobs/view-the-logs-of-a-job-as-plain-text/response-body.md %}

---

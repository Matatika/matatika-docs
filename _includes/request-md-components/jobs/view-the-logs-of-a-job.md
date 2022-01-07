## View the logs of a job

GET
{:.label .label-GET}

/api/jobs/{job-id}/logs?sequence={sequence}
{:.path .path-GET}

Returns the logs of the job `{job-id}`.

### Prerequisites
- Job `{job-id}` must exist

### Request
#### Query Parameters

Query Parameter | Format | Default Value | Description
--------------- | ------ | ------------- | -----------
`sequence` | Unsigned integer | `0` | The line number in the logs to read from

#### Headers
##### Accept

Media Type(s) | Description
------------- | -----------
`text/plain` `*/*` | Sets the response content type format to plain text
`application/stream+json` `application/x-ndjson` | Sets the response content type format to [NDJSON](http://ndjson.org/)


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

{% include snippets/api/jobs/view-the-logs-of-a-job-as-json/response-body.md %}

- `204`: No response body provided.

---

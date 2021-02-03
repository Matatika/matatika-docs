## View the logs of a job

GET
{:.label .label-GET}

/api/jobs/{job-id}/logs?sequence={sequence}
{:.path .path-GET}

Returns the logs of the job `{job-id}` as a streamed response, in the sequence `{sequence}`.

### Prerequisites
- Job `{job-id}` must exist

### Request
#### Headers

Key | Value | Description
--- | ----- | -----------
`Accept` | `application/stream+json` | Sets the response content type format to `application/stream+json`
`Accept` | `text/plain` | Sets the response content type format to `text/plain`
`Accept` | `*/*` (all other values) | Sets the response content type format to `text/plain`

#### Query Parameters

Parameter | Parsed Type | Default Value | Description
--------- | ----------- | ------------- | -----------
`sequence` | `Integer` | `0` |


### Response
- `200`: The job logs in the format specified by associated request `Accept` header
- `204`: No response body provided.

---

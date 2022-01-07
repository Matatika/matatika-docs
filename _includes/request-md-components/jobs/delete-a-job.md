## Delete a job

DELETE
{:.label .label-DELETE}

/api/jobs/{job-id}
{:.path .path-DELETE}

Deletes and stops the execution of the job `{job-id}`.

### Prerequisites
- Job `{job-id}` must exist

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/delete-a-job/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/delete-a-job/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---

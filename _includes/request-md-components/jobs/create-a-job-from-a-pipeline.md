## Create a job from a pipeline

POST
{:.label .label-POST}

/api/pipelines/{pipeline-id}/jobs
{:.path .path-POST}

Creates a new job from the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist and not already be running

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/create-a-job-from-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/create-a-job-from-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
`201 Created`
{: .dummy-heading .path-POST}

[Job](#job) with HAL links.
{% include snippets/api/jobs/create-a-job-from-a-pipeline/response-body.md %}

---

## Verify a pipeline

POST
{:.label .label-POST}

/api/pipelines/{pipeline-id}/verification
{:.path .path-POST}

Verifies the configuration of the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/verify-a-pipeline/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/pipelines/verify-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Job](jobs#job) with HAL links.
{% include snippets/api/pipelines/verify-a-pipeline/response-body.md %}

---

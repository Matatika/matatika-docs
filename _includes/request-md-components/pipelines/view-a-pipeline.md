## View a pipeline

GET
{:.label .label-GET}

/api/pipelines/{pipeline-id}
{:.path .path-GET}

Returns the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/view-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/pipelines/view-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Pipeline](#pipeline) with HAL links.
{% include snippets/api/pipelines/view-a-pipeline/response-body.md %}

---

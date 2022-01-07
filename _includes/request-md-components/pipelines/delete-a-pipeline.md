## Delete a pipeline

DELETE
{:.label .label-DELETE}

/api/pipelines/{pipeline-id}
{:.path .path-DELETE}

Deletes the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/delete-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/pipelines/delete-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---

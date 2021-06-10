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
{: .d-inline-block }

200
{:.label .label-GET}

[Pipeline](#pipeline) with HAL links.

---

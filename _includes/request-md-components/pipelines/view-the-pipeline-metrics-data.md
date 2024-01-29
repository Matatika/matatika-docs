## View pipeline metrics

GET
{:.label .label-GET}

/api/pipelines/{pipeline-id}/metrics
{:.path .path-GET}

Returns the pipeline metrics for each job of `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/view-the-pipeline-metrics-data/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/pipelines/view-the-pipeline-metrics-data/python-requests.md %}
{: .tabs-section-end}

### Response
- `200`: The dataset data (defaults to JSON format).

{% include snippets/api/pipelines/view-the-pipeline-metrics-data/response-body.md %}

- `204`: No response body, metrics not enabled.

---

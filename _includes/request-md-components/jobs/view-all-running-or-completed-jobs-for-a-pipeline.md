## View all running or completed jobs for a pipeline

GET
{:.label .label-GET}

/api/pipelines/{pipeline-id}/jobs
{:.path .path-GET}

Returns all running or completed jobs for the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/view-all-running-or-completed-jobs-for-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/view-all-running-or-completed-jobs-for-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Job](#job) collection with HAL links.
{% include snippets/api/jobs/view-all-running-or-completed-jobs-for-a-pipeline/response-body.md %}

---

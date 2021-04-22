## View all running or completed jobs for a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/jobs
{:.path .path-GET}

Returns all running or completed jobs for the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Headers

Key | Value | Description
--- | ----- | -----------
`enable-task-details` | `true` | Enables detailed task information in the resulting [Job](#job) object response
`enable-task-details` | `false` (default) | Disables detailed task information in the resulting [Job](#job) object response

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/jobs/view-all-running-or-completed-jobs-for-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/jobs/view-all-running-or-completed-jobs-for-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Job](#job) object collection with HAL links.

---

## View all workspace datasets

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets
{:.path .path-GET}

Returns all datasets in the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/view-all-datasets-in-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/view-all-datasets-in-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

201 / 200
{:.label .label-GET}

[Dataset object](datasets#dataset-object) collection with HAL links.

---

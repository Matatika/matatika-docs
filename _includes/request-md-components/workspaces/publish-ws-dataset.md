## Publish a dataset to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datasets
{:.path .path-POST}

Publishes a dataset to the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/publish-a-dataset-to-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/publish-a-dataset-to-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

201 / 200
{:.label .label-POST}

[Dataset object]({{site.baseurl}}/data-structures#dataset) with HAL links.

---

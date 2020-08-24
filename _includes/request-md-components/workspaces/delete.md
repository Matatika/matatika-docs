## Delete a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}
{:.path .path-DELETE}

Deletes the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be the owner of workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/delete-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/delete-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---

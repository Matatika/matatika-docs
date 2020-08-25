## Delete a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}
{:.path .path-DELETE}

Deletes the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/workspaces/delete-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/delete-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---

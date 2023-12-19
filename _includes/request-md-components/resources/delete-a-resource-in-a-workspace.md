## Delete a resource in a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/resources/{resource-path}
{:.path .path-DELETE}

Deletes the resource `{resource-path}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include {{page.snippets}}/delete-a-resource-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include {{page.snippets}}/delete-a-resource-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---

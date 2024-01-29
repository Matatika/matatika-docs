## View the content of a resource in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/resources/{resource-path}
{:.path .path-GET}

Returns the content of the resource `{resource-path}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Resource `{resource-path}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include {{page.snippets}}/view-the-content-of-a-resource-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include {{page.snippets}}/view-the-content-of-a-resource-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response

`200 OK`
{: .dummy-heading .path-GET}

The resource content.
{% include {{page.snippets}}/view-the-content-of-a-resource-in-a-workspace/response-body.md %}

---

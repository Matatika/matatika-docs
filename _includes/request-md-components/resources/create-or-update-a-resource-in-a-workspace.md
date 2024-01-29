## Create or update a resource in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/resources/{resource-path}
{:.path .path-PUT}

Creates or updates the resource `{resource-path}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
[Resource](#resource) resource.
{% include {{page.snippets}}/create-or-update-a-resource-in-a-workspace/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include {{page.snippets}}/create-or-update-a-resource-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include {{page.snippets}}/create-or-update-a-resource-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK / 201 Created`
{: .dummy-heading .path-PUT}

[Resource](#resource) with HAL links.
{% include {{page.snippets}}/create-or-update-a-resource-in-a-workspace/response-body.md %}

---

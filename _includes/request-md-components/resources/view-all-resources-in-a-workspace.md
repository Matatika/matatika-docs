## View all resources in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/resources
{:.path .path-GET}

Returns all resources in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Resource `{resource-path}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include {{page.snippets}}/view-all-resources-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include {{page.snippets}}/view-all-resources-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Resource](#resource) collection with HAL links.
{% include {{page.snippets}}/view-all-resources-in-a-workspace/response-body.md %}

---

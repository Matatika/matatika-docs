## Publish multiple resources to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/resources
{:.path .path-POST}

Publishes multiple resources to the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include {{page.snippets}}/publish-multiple-resources-to-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include {{page.snippets}}/publish-multiple-resources-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Resource](#resource) collection with HAL links.
{% include {{page.snippets}}/publish-multiple-resources-to-a-workspace/response-body.md %}

---

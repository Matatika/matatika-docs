## View all datacomponents in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datacomponents
{:.path .path-GET}

Returns all datacomponents in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datacomponents/view-all-datacomponents-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datacomponents/view-all-datacomponents-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Datacomponent](#datacomponent) collection with HAL links.
{% include snippets/api/datacomponents/view-all-datacomponents-in-a-workspace/response-body.md %}

---


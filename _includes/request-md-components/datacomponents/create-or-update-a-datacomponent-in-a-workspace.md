## Create or update a datacomponent in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/datacomponents/{datacomponent-id}
{:.path .path-PUT}

Creates or updates the datacomponent `{datacomponent-id}` in the workspace `{workspace-id}`.

### Request
#### Body
[Datacomponent](#datacomponent) resource.
{% include snippets/api/datacomponents/create-or-update-a-datacomponent-in-a-workspace/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datacomponents/create-or-update-a-datacomponent-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datacomponents/create-or-update-a-datacomponent-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK / 201 Created`
{: .dummy-heading .path-PUT}

[Datacomponent](#datacomponent) with HAL links.
{% include snippets/api/datacomponents/create-or-update-a-datacomponent-in-a-workspace/response-body.md %}

---

## Initialise a new datacomponent in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datacomponents
{:.path .path-POST}

Initialises a new datacomponent in the workspace `{workspace-id}`.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datacomponents/initialise-a-new-datacomponent-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datacomponents/initialise-a-new-datacomponent-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[datacomponent](#datacomponent) with HAL links.
{% include snippets/api/datacomponents/initialise-a-new-datacomponent-in-a-workspace/response-body.md %}

---

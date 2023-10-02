## Publish dataplugins from a `discovery.yml`

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/discovery.yml
{:.path .path-POST}

Publishes dataplugins from a [Meltano `discovery.yml`](https://docs.meltano.com/reference/settings#discovery_url).

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
[Meltano `discovery.yml`](https://docs.meltano.com/reference/settings#discovery_url)
{% include snippets/api/dataplugins/publish-dataplugins-from-a-discovery-yml/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/publish-dataplugins-from-a-discovery-yml/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/dataplugins/publish-dataplugins-from-a-discovery-yml/python-requests.md %}
{: .tabs-section-end}

### Response
`201 Created`
{: .dummy-heading .path-POST}

[Dataplugin](#dataplugin) collection with HAL links.
{% include snippets/api/dataplugins/publish-dataplugins-from-a-discovery-yml/response-body.md %}

---

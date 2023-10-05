## Initialise a new dataplugin

POST
{:.label .label-POST}

/api/dataplugins
{:.path .path-POST}

Initialises a new dataplugin.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/initialise-a-new-dataplugin/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/dataplugins/initialise-a-new-dataplugin/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Dataplugin](#dataplugin) with HAL links.
{% include snippets/api/dataplugins/initialise-a-new-dataplugin/response-body.md %}

---

## Create a dataplugin

PUT
{:.label .label-PUT}

/api/dataplugins/{dataplugin-id}
{:.path .path-PUT}

Creates the dataplugin `{dataplugin-id}`.

### Request
#### Body
[Dataplugin](#dataplugin) resource.
{% include snippets/api/dataplugins/create-a-dataplugin/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/create-a-dataplugin/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/create-a-dataplugin/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Dataplugin](#dataplugin) with HAL links.
{% include snippets/api/dataplugins/update-a-dataplugin/response-body.md %}

---

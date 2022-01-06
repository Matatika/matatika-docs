## View a dataplugin

GET
{:.label .label-GET}

/api/dataplugins/{dataplugin-id}
{:.path .path-GET}

Returns the dataplugin `{dataplugin-id}`.

### Prerequisites
- Dataplugin `{dataplugin-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-a-dataplugin/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/view-a-dataplugin/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

### `200 OK`
{: .fs-4 .path-GET }

[Dataplugin](#dataplugin) with HAL links.
{% include snippets/api/dataplugins/view-a-dataplugin/response-body.md %}

---

## View all datasources

GET
{:.label .label-GET}

/api/datasources
{:.path .path-GET}

Returns all available datasources.

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/datasources/view-all-datasources/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasources/view-all-datasources/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datasource object](#datasource-object) collection with HAL links.

---

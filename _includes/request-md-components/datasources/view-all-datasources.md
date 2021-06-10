## View all datasources

GET
{:.label .label-GET}

/api/datasources
{:.path .path-GET}

Returns all available datasources.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasources/view-all-datasources/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasources/view-all-datasources/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datasource](#datasource) collection with HAL links.

{% include snippets/api/datasources/view-all-datasources/response-body.md %}

---

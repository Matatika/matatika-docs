## Initialise a datasource

POST
{:.label .label-POST}

/api/datasources
{:.path .path-POST}

Initialises a new datasource.

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/datasources/initialise-a-datasource/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasources/initialise-a-datasource/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Datasource object](#datasource-object) with HAL links.

---

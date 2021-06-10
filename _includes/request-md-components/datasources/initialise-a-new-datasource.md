## Initialise a new datasource

POST
{:.label .label-POST}

/api/datasources
{:.path .path-POST}

Initialises a new datasource.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasources/initialise-a-new-datasource/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasources/initialise-a-new-datasource/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Datasource](#datasource) with HAL links.


{% include snippets/api/datasources/initialise-a-new-datasource/response-body.md %}

---

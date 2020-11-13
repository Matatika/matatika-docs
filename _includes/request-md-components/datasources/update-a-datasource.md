## Update a datasource

PUT
{:.label .label-PUT}

/api/datasources/{datasource-id}
{:.path .path-PUT}

Updates the datasource `{datasource-id}`.

### Request

#### Body

{% include snippets/api/datasources/update-a-datasource/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The datasource name | 
`description` | `String` | A description of the datasource |
`repositoryUrl` | `String` | A URL to the datasource repository | 

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasources/update-a-datasource/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasources/update-a-datasource/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Datasource object](#datasource-object) with HAL links.

---

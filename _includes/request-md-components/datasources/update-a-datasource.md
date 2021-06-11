## Update a datasource

PUT
{:.label .label-PUT}

/api/datasources/{datasource-id}
{:.path .path-PUT}

Updates the datasource `{datasource-id}`.

### Prerequisites
- Datasource `{datasource-id}` must exist

### Request
#### Body

{% include snippets/api/datasources/update-a-datasource/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`description` | `String` | A description of the datasource |
`repositoryUrl` | `String` | A URL to the datasource repository | 
`settings` | `Array` of [`Setting`](#setting)s | The datasource settings |

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

200
{:.label .label-PUT}

[Datasource](#datasource) with HAL links.


{% include snippets/api/datasources/update-a-datasource/response-body.md %}

---

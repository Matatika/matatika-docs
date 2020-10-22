## Create a datasource

PUT
{:.label .label-PUT}

/api/datasources/{datasource-id}
{:.path .path-PUT}

Creates the datasource `{datasource-id}`.

### Request

#### Body

{% include snippets/datasources/create-a-datasource/request-body.md %}

Path | Type | Description | Required | Constraints
---- | ---- | ----------- | -------- | -----------
`name` | `String` | The datasource name | Yes | Not empty
`description` | `String` | A description of the datasource | No |
`repositoryUrl` | `String` | A URL to the datasource repository | No |

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/datasources/create-a-datasource/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasources/create-a-datasource/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Datasource object](#datasource-object) with HAL links.

---

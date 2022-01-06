## Update a dataplugin

PUT
{:.label .label-PUT}

/api/dataplugins/{dataplugin-id}
{:.path .path-PUT}

Updates the dataplugin `{dataplugin-id}`.

### Prerequisites
- Dataplugin `{dataplugin-id}` must exist

### Request
#### Body
[Dataplugin](#dataplugin) resource.
{% include snippets/api/dataplugins/update-a-dataplugin/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`description` | `String` | A description of the dataplugin |
`repositoryUrl` | `String` | A URL to the dataplugin repository | 
`settings` | `Array` of [`Setting`](#setting)s | The dataplugin settings |

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/update-a-dataplugin/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/update-a-dataplugin/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Dataplugin](#dataplugin) with HAL links.
{% include snippets/api/dataplugins/update-a-dataplugin/response-body.md %}

---

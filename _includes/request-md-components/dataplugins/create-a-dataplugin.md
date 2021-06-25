## Create a dataplugin

PUT
{:.label .label-PUT}

/api/dataplugins/{dataplugin-id}
{:.path .path-PUT}

Creates the dataplugin `{dataplugin-id}`.

### Request
#### Body

{% include snippets/api/dataplugins/create-a-dataplugin/request-body.md %}

Path | Type | Description | Required | Constraints
---- | ---- | ----------- | -------- | -----------
`name` | `String` | The dataplugin name | Yes | Not empty
`description` | `String` | A description of the dataplugin | No |
`repositoryUrl` | `String` | The dataplugin repository URL | No |
`settings` | `Array` of [`Setting`](#setting)s | The dataplugin settings | No |

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

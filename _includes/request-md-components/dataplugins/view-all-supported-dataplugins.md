## View all supported dataplugins

GET
{:.label .label-GET}

/api/dataplugins
{:.path .path-GET}

Returns all dataplugins supported by Matatika.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-all-supported-dataplugins/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/dataplugins/view-all-supported-dataplugins/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataplugin](#dataplugin) collection with HAL links.
{% include snippets/api/dataplugins/view-all-supported-dataplugins/response-body.md %}

---

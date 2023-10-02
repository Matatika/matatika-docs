## View the Matatika `discovery.yml`

GET
{:.label .label-GET}

/api/discovery.yml
{:.path .path-GET}

Returns a [Meltano `discovery.yml`](https://docs.meltano.com/reference/settings#discovery_url) containing all dataplugins supported by Matatika.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-the-matatika-discovery-yml/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/dataplugins/view-the-matatika-discovery-yml/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Meltano `discovery.yml`](https://docs.meltano.com/reference/settings#discovery_url).
{% include snippets/api/dataplugins/view-the-matatika-discovery-yml/response-body.md %}

---

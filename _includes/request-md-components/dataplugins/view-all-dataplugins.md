## View all dataplugins

GET
{:.label .label-GET}

/api/dataplugins
{:.path .path-GET}

Returns all available dataplugins.

### Request
#### Headers
##### Accept

Media Type(s) | Description
------------- | -----------
`*/*` | Set the response content type format to [Meltano `discovery.yml`](https://meltano.com/docs/plugins.html#discoverable-plugins)
`application/hal+json` | Sets the response content type format to [HAL JSON](https://en.wikipedia.org/wiki/Hypertext_Application_Language) format.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-all-dataplugins/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/view-all-dataplugins/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataplugin](#dataplugin) collection with HAL links.

{% include snippets/api/dataplugins/view-all-dataplugins/response-body.md %}

[Meltano `discovery.yml`](https://meltano.com/docs/plugins.html#discoverable-plugins).

{% include snippets/api/dataplugins/view-all-supported-and-custom-dataplugins-discovery-yml/response-body.md %}

---

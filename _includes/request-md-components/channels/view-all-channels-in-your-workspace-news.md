## View all channels in your workspace news

GET
{:.label .label-GET}

/api/channels/{channel-id}
{:.path .path-GET}

Returns all channels in your news for the workspace.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/channels-in-news/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/channels/channels-in-news/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Channels](#channel) in your workspace news.
{% include snippets/api/channels/channels-in-news/response-body.md %}

---

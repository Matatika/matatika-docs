## Add workspace scope to a channel

PUT
{:.label .label-PUT}

/api/channels/{channel-id}/scope/workspace
{:.path .path-PUT}

Add workspace scope to a channel.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/add-workspace-scope-to-a-channel/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/channels/add-workspace-scope-to-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Channel](#channel) with HAL links.
{% include snippets/api/channels/add-workspace-scope-to-a-channel/response-body.md %}

---

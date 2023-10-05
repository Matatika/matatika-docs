## Withdraw workspace scope from a channel

PUT
{:.label .label-PUT}

/api/channels/{channel-id}/scope/profile
{:.path .path-PUT}

Withdraw workspace scope from a channel.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/withdraw-workspace-scope-from-a-channel/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/channels/withdraw-workspace-scope-from-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Channel](#channel) with HAL links.
{% include snippets/api/channels/withdraw-workspace-scope-from-a-channel/response-body.md %}

---

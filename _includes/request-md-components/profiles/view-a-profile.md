## View a profile

GET
{: .label .label-GET}

/api/profiles/{profile-id}
{:.path .path-GET}

Returns the profile `{profile-id`}.

### Prerequisites

- Profile `{profile-id}` must exist under the authenticated user account

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/profiles/view-a-profile/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/profiles/view-a-profile/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Profile](#profile) with HAL links.
{% include snippets/api/profiles/view-a-profile/response-body.md %}

---

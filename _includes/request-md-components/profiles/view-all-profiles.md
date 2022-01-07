## View all profiles

GET
{: .label .label-GET}

/api/profiles
{:.path .path-GET}

Returns all profiles under the authenticated user account.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/profiles/view-all-profiles/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/profiles/view-all-profiles/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Profile](#profile) collection with HAL links.
{% include snippets/api/profiles/view-all-profiles/response-body.md %}

---

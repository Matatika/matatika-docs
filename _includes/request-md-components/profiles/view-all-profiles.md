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
{: .d-inline-block }

200
{:.label .label-GET}

#### Body
[Profile object](#profile) collection with HAL links.

---

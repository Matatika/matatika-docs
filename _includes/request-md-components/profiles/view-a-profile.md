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
{: .d-inline-block }

200
{:.label .label-GET}

#### Body
[Profile](#profile) with HAL links.

---

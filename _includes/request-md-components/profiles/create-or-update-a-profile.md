## Create or update profile

PUT
{: .label .label-PUT}

/api/profiles/{profile-id}
{:.path .path-PUT}

Creates or updates the user profile.

### Prerequisites

- The authentication subject must match the profile ID `{profile-id}`

### Request

#### Body
[Profile](#profile) resource.
{% include snippets/api/profiles/update-a-profile/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/profiles/update-a-profile/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/profiles/update-a-profile/python-requests.md %}
{: .tabs-section-end}

### Response
### `200 OK` / `2
{: .fs-4 .path-POST }

[Profile](#profile) with HAL links.
{% include snippets/api/profiles/update-a-profile/response-body.md %}

---

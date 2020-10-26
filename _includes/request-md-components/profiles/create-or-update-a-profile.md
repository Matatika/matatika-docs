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

{% include snippets/profiles/update-a-profile/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The profile name | Must not be empty
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address | Must not be empty; must be a valid email address

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/profiles/update-a-profile/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/profiles/update-a-profile/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201 / 200
{:.label .label-PUT}

#### Body

[Profile object](#profile-object) with HAL links.

---

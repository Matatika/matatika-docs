## View profile

GET
{: .label .label-GET}

/api/profiles/{profile-id}
{:.path .path-GET}

Returns the user profile.

### Prerequisites

- The authentication subject must match the profile ID `{profile-id}`

### Request

#### cURL

{% include snippets/profiles/view-a-profile/curl-request.md %}

#### Python (Requests)

{% include snippets/profiles/view-a-profile/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

#### Body
[Proile object](#profile-object) with HAL links.

---

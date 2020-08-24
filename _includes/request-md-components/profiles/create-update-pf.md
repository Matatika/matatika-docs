## Create or update profile

PUT
{: .label .label-PUT}

/api/profiles/{profile-id}
{:.path .path-PUT}

Creates or updates the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

### Request
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/update-a-profile/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The profile name | Must not be empty
`phone` | `String` | The profile phone number
`email` | `String` | The profile email address | Must not be empty; must be a valid email address

#### cURL
{: .no_toc }

{% include snippets/profiles/update-a-profile/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/update-a-profile/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

201 / 200
{:.label .label-PUT}

#### Body
{: .no_toc }

[Profile object](#object) with HAL links.

---

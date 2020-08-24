## View profile

GET
{: .label .label-GET}

/api/profiles/{profile-id}
{:.path .path-GET}

Returns the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/profiles/view-a-profile/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/profiles/view-a-profile/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

#### Body
{: .no_toc }

[Profile object](#profile-object) with HAL links.

---

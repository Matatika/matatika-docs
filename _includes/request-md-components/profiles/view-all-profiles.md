## View all profiles

GET
{: .label .label-GET}

/api/profiles
{:.path .path-GET}

Returns all profiles under the authenicated user account.

### Request

#### Body
No request body required.

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
[Proile object](#profile-object) collection with HAL links.

---

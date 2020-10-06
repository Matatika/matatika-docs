## Set a workspace as default

PATCH
{:.label .label-PATCH}

/api/profiles/{profile-id}
{:.path .path-PATCH}

Sets a default workspace for the user profile.

### Prerequisites

- The authentication subject must match the profile ID `{profile-id}`

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.

### Request

#### Body

{% include snippets/profiles/set-a-workspace-as-default/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`defaultWorkspace` | `JSON Object` | Default workspace object |
`defaultWorkspace.id` | `String` | The default workspace ID | Must be a valid and existing UUID

- cURL
{: .tab .tabs-section-start}

{% include snippets/profiles/set-a-workspace-as-default/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/profiles/set-a-workspace-as-default/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PATCH}

#### Body

[Profile object](#profile-object) with HAL links.

---

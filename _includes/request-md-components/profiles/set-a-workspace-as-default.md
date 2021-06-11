## Set a workspace as default

PATCH
{:.label .label-PATCH}

/api/profiles/{profile-id}
{:.path .path-PATCH}

Sets a default workspace for the profile `{profile-id}`.

### Prerequisites

- The authentication subject must match the profile ID `{profile-id}`

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.

### Request

#### Body

{% include snippets/api/profiles/set-a-workspace-as-default/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`defaultWorkspace` | [`Workspace`](workspaces#workspace) | Default workspace | Must be a valid and existing workspace

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/profiles/set-a-workspace-as-default/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/profiles/set-a-workspace-as-default/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PATCH}

#### Body

[Profile](#profile) with HAL links.

---

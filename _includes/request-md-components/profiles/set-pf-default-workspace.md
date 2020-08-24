## Set a workspace as default

PATCH
{:.label .label-PATCH}

/api/profiles/{profile-id}
{:.path .path-PATCH}

Sets a default workspace for the user profile.

### Prerequisites
{: .no_toc }

- The authentication subject must match the profile ID `{profile-id}`

A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.

### Request
{: .no_toc }

#### Body
{: .no_toc }

{% include snippets/profiles/set-a-workspace-as-default/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`defaultWorkspace` | `JSON Object` | Default workspace object |
`defaultWorkspace.id` | `String` | The default workspace ID | Must be a valid and existing UUID

#### cURL
{: .no_toc }

{% include snippets/profiles/set-a-workspace-as-default/curl-request.md %}

#### Python (Requests)

{% include snippets/profiles/set-a-workspace-as-default/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-PATCH}

#### Body
{: .no_toc }

[Profile object](#profile-object) with HAL links.

---

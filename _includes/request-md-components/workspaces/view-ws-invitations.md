## View all invitations to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

Returns active invitations to the workspace `{workspace-id}` specific to the user. As a workspace owner, this instead returns all active invitations to the workspace across all members.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/view-all-invitations-to-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/view-all-invitations-to-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Invitation object](invitations#invitation-object) collection with HAL links.

---

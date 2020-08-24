## View a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

Returns the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be a member of the workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/view-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/view-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Workspace object]({{site.baseurl}}/data-structures#workspace) with HAL links.

---

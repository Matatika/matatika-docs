## View all member subscriptions to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/subscriptions
{:.path .path-GET}

Returns all member subscriptions to the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/view-all-member-subscriptions-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/view-all-member-subscriptions-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Subscription](#subscription) collection with HAL links.
{% include snippets/api/subscriptions/view-all-member-subscriptions-to-a-workspace/response-body.md %}

---

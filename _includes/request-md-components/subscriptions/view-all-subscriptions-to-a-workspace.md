## View all subscriptions to a workspace

GET
{:.label .label-GET}

/api/workspace/{workspace-id}/subscriptions
{:.path .path-GET}

Returns all subscriptions to the workspace `{workspace-id}`

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/view-all-subscriptions-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/view-all-subscriptions-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Subscription](#subscription) object collection with HAL links.

{% include snippets/api/subscriptions/view-all-subscriptions-to-a-workspace/response-body.md %}

---

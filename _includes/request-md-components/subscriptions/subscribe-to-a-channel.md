## Subscribe to a channel

POST
{:.label .label-POST}

/api/channels/{channel-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the channel `{channel-id}`.

### Prerequisites
- Channel `{channel-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Subscription](#subscription) object with HAL links.

---

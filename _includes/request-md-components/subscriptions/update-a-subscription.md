## Update a subscription

PUT
{:.label .label-PUT}

/api/subscriptions/{subscription-id}
{:.path .path-PUT}

Updates the subscription `{subscription-id}`.

### Prerequisites
- Subscription `{subscription-id}` must exist

### Request
#### Body

Path | Type | Format | Description
---- | ---- | ------ | -----------
`type` | `String` | [SubscriptionType](#subscriptiontype) | The type of subscription

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Subscription](#subscription) object with HAL links.

---

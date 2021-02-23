---
layout: default
title: Subscriptions
permalink: /resources/subscriptions
parent: Resources
nav_order: 14
components: request-md-components/subscriptions
---

# {{page.title}}

Subscriptions are a declaration of interest in a particular resource, allowing a user to recieve [notifications]() when certain events occur. The events that trigger [notifications]() are controlled by the [type of subscription](#subscription-type).
{: .fs-5 }

---

## Objects
{: .no_toc}

### Subscription

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The subscription ID
`created` | `String` | ISO 8601 timestamp | The instant the subscription was created at
`lastModified` | `String` | ISO 8601 timestamp | The instant the subscription was last modified at
`type` | `String` | [Subscription Type](#subscription-type) | The type of subscription

## Formats
{: .no_toc}

### Subscription Type
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`ALL` | Triggers [notifications]() for all resource events
`ALERTS` | Triggers [notifications]() for resource alert events only
`NONE` | Does not trigger any [notifications]()

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-subscriptions.md %}
{% include {{page.components}}/view-all-subscriptions-to-a-workspace.md %}
{% include {{page.components}}/view-a-subscription.md %}
{% include {{page.components}}/subscribe-to-a-channel.md %}
{% include {{page.components}}/subscribe-to-a-dataset.md %}
{% include {{page.components}}/subscribe-to-a-pipeline.md %}
{% include {{page.components}}/update-a-subscription.md %}
{% include {{page.components}}/remove-a-subscription.md %}

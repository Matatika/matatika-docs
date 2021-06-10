---
layout: default
title: Notifications
permalink: /api/resources/notifications
parent: Resources
grand_parent: API
nav_order: 15
components: request-md-components/notifications
---

# {{page.title}}

Notifications are alerts triggered by certain events pertaining to a resource. To recieve notifications for a specific resource, a user must have a [subscription](subscriptions) to the resource.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Notification

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The notification ID
`created` | `String` | ISO 8601 timestamp | The instant the notification was created at
`lastModified` | `String` | ISO 8601 timestamp | The instant the notification was last modified at
`actor` | [`Member object`](members#member-object) | | The member whose action raised this notification
`type` | `String` | [Notification Type](#notification-type) | The type of notification
`resolved` | `Boolean` | | Whether or not the notification has been read

{% include snippets/api/notifications/view-a-notification/response-body.md %}

## Formats
{: .no_toc}

### Notification Type
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`DATASET_ACTIVITY` | Any activity on the [dataset](datasets)
`DATASET_ANOMOLY` | A detected anomoly in the [dataset](datasets) data
`DATASET_COMMENT` | A [comment](comments#comment) on the [dataset](datasets)
`DATASET_LIKE` | A [like](datasets#record-a-like-of-a-dataset) recorded on the [dataset](datasets)
`DATASET_MESSAGE` | A [message](datasets#dataset-message) about the [dataset](datasets)

---

#### Requests

- TOC
{: toc }

#### See Also

- [Create or update a dataset message](datasets#create-or-update-a-dataset-message)

---

{% include {{page.components}}/view-all-notifications.md %}
{% include {{page.components}}/view-all-notifications-for-a-workspace.md %}
{% include {{page.components}}/view-a-notification.md %}
{% include {{page.components}}/refresh-notifications.md %}
{% include {{page.components}}/delete-a-notification.md %}


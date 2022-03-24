---
layout: default
title: Accounts
permalink: /api/resources/accounts
parent: Resources
grand_parent: API
nav_order: 1
components: request-md-components/accounts
---

# {{page.title}}

Accounts are passive entities that store quota information for resources consumed by associated [profiles](profiles). An account is created for a user when they first sign up.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Account

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The account ID 
`created` | `String` | ISO 8601 timestamp | The instant at which the account was created
`lastModified` | `String` | ISO 8601 timestamp | The instant at which the account was last modified
`company` | `String` | | The name of the company associated with the account
`maxWorkspaces` | `Integer` | | The maximum number of workspaces that can be created under the account
`maxRows` | `Integer` | The maximum number of managed database rows available to the account
`minutesPerMonth` | `Integer` | | The number of [pipeline](pipelines) run minutes available to the account per month
`minutesUsed` | `Integer` | | The number of [pipeline](pipelines) run minutes used by the account per month

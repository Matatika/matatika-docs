---
title: Whitelist IP ranges
description: How to secure your data ingestion with whitelisted IPs
permalink: /snowflake-developer-guides/whitelist-ip-policy/
parent: Snowflake Developer Guides
has_children: false
nav_order: 1

---

# {{page.title}}

Whitelisting or allowing specific IP addresses is a common technique that provides an addition layer of access control security around your Snowflake data warehouse.

With this approach you generally block all internet addresses and only allow you known clients to connect.  These would typically include your developers, your data ingestion services
such as Matatika, or other products that need to process your data.  Block all other IPs means that malicious clients have another step to overcome before gaining access to your
senstive information.

While additional setup is required, it's a relatively simply additional protection and minimal extra configuration for your intended users to be able to gain access.


The Matatika platform is hosted in an Azure data center within the United Kingdom and will connect to your Snowflake warehouse from the following addresses.

`51.137.148.226`

To block all access except our service you can configure a network policy as follows:

```
CREATE NETWORK RULE block_all_public_access
  MODE = INGRESS
  TYPE = IPV4
  VALUE_LIST = ('0.0.0.0/0');

CREATE NETWORK RULE allow_matatika_access_rule
  MODE = INGRESS
  TYPE = IPV4
  VALUE_LIST = ('51.137.148.226');

CREATE NETWORK POLICY secure_data_policy
  ALLOWED_NETWORK_RULE_LIST = ('allow_matatika_access_rule')
  BLOCKED_NETWORK_RULE_LIST=('block_all_public_access');
```


Full details are available within the [Snowflake network policy documentation](https://docs.snowflake.com/en/user-guide/network-policies)


Finally, add the policy to your entire account.

```
ALTER ACCOUNT SET NETWORK_POLICY = secure_data_policy;
```


Or a specific user

```
ALTER USER joe SET NETWORK_POLICY = secure_data_policy;
```

{: .fs-5 }

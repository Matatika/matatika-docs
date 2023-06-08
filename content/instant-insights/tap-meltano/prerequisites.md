---
title: Prerequisites
permalink: /instant-insights/tap-meltano/prerequisites
parent: Meltano
grand_parent: Instant Insights
nav_order: 1
---

# Meltano {{page.title}}

---

## Overview

Our Meltano data source takes one setting which is a database URI. This is the database URI for the database and schema where you store your Meltano project's job data.

If you don't manually set a `MELTANO_DATABASE_URI` in your Meltano project, then your Meltano job data is stored in a local sqlite database in the `.meltano` directory in your project. 

This data source will work locally with a sqlite database, but in the Matatika app we can only connect to online databases.

---

For more information about Meltano and the `MELTANO_DATABASE_URI`:

[Meltano Documentation](https://docs.meltano.com/){:target="_blank"}

[Meltano database URI](https://docs.meltano.com/reference/settings#database_uri){:target="_blank"}
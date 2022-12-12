---
title: Concepts
permalink: /concepts
nav_order: 2
has_children:
---

# {{page.title}}

An quick walk through of some fundamental Matatika concepts and their usage.
{: .fs-5 }

---

## Modern Data Stack

There are many opinions on the "Modern Data Stack" - frankly one size cannot fit both Google scale and a five-person startup. At Matatika, we have selected components that we believe provide you the best combination of ***Scalability***, ***Performance***, ***Flexibility*** and lowest total cost-of-ownership. Ultimately, our goal is to provide a modern data stack with No Limits.

![Data Ops]({{site.baseurl}}/assets/img/platform-overview.png)

### Extraction

[Meltano](https://meltano.com/){:target="_blank"} is primarily used to manage the data extraction in your Matatika [workspace](glossary#workspace). Matatika are active contributors to Meltano and will continue to invest in other technologies that advance our customers' ability to implement [Data Ops](#data-ops) extraction methodologies.

### Warehousing

[PostgreSQL](https://www.postgresql.org/){:target="_blank"} is the default data storage technology in your Matatika [workspace](glossary#workspace). Data technologies will continue to advance and therefore, we believe it is vital your stack be database agnostic. Currently, SQL with [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity){:target="_blank"}/[JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity){:target="_blank"} are the most widely adopted business intelligence data interfaces. The *Matatika Platform* supports any JDBC-compliant database or serverless data warehouses, such as Google BigQuery or AWS Athena.

### Transformation

[dbt](https://www.getdbt.com/){:target="_blank"} is the default transformation technology in your Matatika [workspace](glossary#workspace). SQL-based transformations in code and testing considerations by design, provide the fundamentals required to support [Data Ops](#data-ops) methodologies at the transformation layer. The *Matatika Platform* is able to execute any transformation technology in isolated containers.

### Orchestration

[Spring Cloud Dataflow](https://spring.io/projects/spring-cloud-dataflow){:target="_blank"} is the main orchestration technology in your Matatika [workspace](glossary#workspace). The *Matatika Platform* takes care of scheduling, log collection, and credential management with isolated containers for all workspace jobs.

### Catalog

Your datasets and models are published, indexed and searchable via the Matatika [API](api/resources/), [CLI](cli/), or [Configuration Repository](glossary#configuration-repository). The *Matatika Platform* provides a personalised feed of insights by scoring your datasets by usage.

### Analytics

[Jupyter Notebooks](https://jupyter.org/){:target="_blank"} and [visualisations](dataml/datasetml/charts) in [ChartJS](https://www.chartjs.org/){:target="_blank"} and [Google Charts](https://developers.google.com/chart){:target="_blank"} formats can be published to your [workspace](glossary#workspace). The Matatika dataset format gives you full control of the chart visualisation as code, supporting [Data Ops](#data-ops) through to the analytics layer of your stack.

![Modern Data Stack]({{site.baseurl}}/assets/img/ModernDataStack.png)

## Data Ops

Your Matatika [workspace](glossary#workspace) is a unique Business Intelligence as Code solution. All artifacts are managed in a [Git Configuration Repository](glossary#configuration-repository) with credentials securely stored inside the platform. We enable you to deliver a robust analytics solution without restricting you to any specific Data Ops methodology.

![Data Ops]({{site.baseurl}}/assets/img/DataOps.png)
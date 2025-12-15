---
title: Your Cloud
description: Get started with the Matatika on your own cloud
permalink: /getting-started/your-cloud
nav_order: 2
parent: Getting Started

---

# Getting Started With Matatika on {{page.title}}

*Time required: **5 minutes***

---

## Overview
The Matatika Platform can run in your own cloud.  This documentation aims to provide you with everything you need to get up and running including:

- The architecture and examples to run on an Azure AKS cluster, with one node.
- The infrastructure configuration to be scaled out based on your compute needs.
- Scripts that create the infrastructure, example configuration files, and and Azure DevOps pipeline example to deploy and upgrade automatically.


## Get started now
Start by cloning the [Matatika Build](https://github.com/Matatika/matatika-build){:target="_blank"} repository.

```
$ git clone git@github.com:Matatika/matatika-build.git
```

The README will guide you though the setup and provides fully tested deployment examples.

Once completed, you will be able login to the Matatika Lab on your domain and start producing trusted data!

*Got a question?*

[Ask us on Slack](https://meltano.com/slack){:target="_blank"}{:.btn}


### Reverse proxy configuration
If deploying behind an application gateway/reverse proxy, ensure that an `X-Forward-Host` header with the external host is sent with all requests. This will allow the catalog API to generate resource links targeting the correct host, which the app uses to navigate the API following subsequent user actions.

## Further Reading

- Find out how Matatika works with Meltano by reading about the Matatika concepts and artifacts: [Matatika Concepts]({{site.baseurl}}/concepts), [Matatika Glossary]({{site.baseurl}}/glossary) and [Matatika Technical Glossary](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary){:target="_blank"}
- Create your first pipeline: [Create A Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)

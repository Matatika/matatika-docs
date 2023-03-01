---
title: Meltano
permalink: /meltano
nav_order: 15
---

# Get Our UI for {{page.title}}

- Time required: *5 minutes*

---

## Overview

How to get a UI, orchestrator and basic visulisation for your Meltano project using the Matatika plugin.

---

## Requirements

- Meltano installed - [How to get Meltano](https://docs.meltano.com/getting-started/installation){:target="_blank"}
- Docker installed - [How to get Docker](https://docs.docker.com/get-docker/){:target="_blank"}

---

## Install the Matatika Plugin into your project

1. In your terminal `cd` into your Meltano project
1. In your terminal run:
    ```sh
    meltano add utility matatika
    ```
1. In your terminal run:
    ```sh
    meltano invoke matatika lab start
    ```
(This may take some time to download the docker images for the first run).
1. Once the docker images are running your browser will open to `https://localhost:3443`
1. You will now see a login screen. If you already have a Matatika account you can just login, otherwise sign up here: [Matatika Sign Up](https://www.matatika.com/sign-up/).

Congratulations, you now have the Matatika Lab running against your Meltano project!

[Make Your First API Call]({{site.baseurl}}/how-to-guides/use-the-matatika-api/making-your-first-api-call){: .btn}
{: .text-center}

---

## Further Reading

- Find out how Matatika works with Meltano by reading about the Matatika concepts and artifacts: [Matatika Concepts]({{site.baseurl}}/concepts), [Matatika Glossary]({{site.baseurl}}/glossary) and [Matatika Technical Glossary](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary){:target="_blank"}
- Create your first pipeline: [Create A Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)

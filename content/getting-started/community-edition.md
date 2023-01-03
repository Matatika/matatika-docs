---
title: Community Edition
permalink: /getting-started/community-edition
nav_order: 2
parent: Getting Started

---

# Getting Started {{page.title}}

- Time required: *10 minutes*

---

## Overview

This getting started guide get Matatika Community Edition up and running on your local machine.

---

## Requirements

- Docker installed - [How to get Docker](https://docs.docker.com/get-docker/){:target="_blank"}
- Git installed - [How to get Git](https://github.com/git-guides/install-git){:target="_blank"}

---

## Install the Matatika Community Edition

1. Go to `https://github.com/Matatika/matatika-ce` and clone the repository.
1. In your terminal, move to the `matatika-ce` directory
- If you plan on hosting the lab for other users to connect to, we suggest setting your own secret in the `docker-compose.yml` for the environment variable `MATATIKA_AUTH_LOCAL_SECRET`.
1. In your terminal run:
```terminal
docker compose up
```
(This may take some time to download the docker images for the first run).
1. Once everything is running, in your browser go to:
```
localhost:3443
```
1. You will now see a login screen. If you already have a Matatika account you can just login, otherwise sign up.

Congratulations, you now have the Matatika Community Edition running!

[Make Your First API Call]({{site.baseurl}}/how-to-guides/use-the-matatika-api/making-your-first-api-call){: .btn}
{: .text-center}

---

## Further Reading

- Create your first pipeline: [Create A Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)

---
title: Community Edition
permalink: /getting-started/community-edition
nav_order: 2
parent: Getting Started

---

# Getting Started {{page.title}}

*Time required: **10 minutes***

---

## Overview

This getting started guide get Matatika Community Edition up and running on your local machine.

---

## Requirements

- Docker installed - [How to get Docker](https://docs.docker.com/get-docker/){:target="_blank"}
- Git installed - [How to get Git](https://github.com/git-guides/install-git){:target="_blank"}

---

## Install the Matatika Community Edition

1. Go to [https://github.com/Matatika/matatika-ce](https://github.com/Matatika/matatika-ce), clone the repository, docker compose up Matatika Community Edition.
```terminal
git clone https://github.com/Matatika/matatika-ce
cd matatika-ce
docker-compose up
```
- Coffee time.  This may take a few minutes to download the docker images for the first run.
- If you plan on hosting the lab for other users to connect to, we suggest setting your own secret in the `docker-compose.yml` using the environment variable `MATATIKA_AUTH_LOCAL_SECRET`.
1. Once everything is running, in your browser go to:
```
localhost:3443
```
1. Login with your Matatika Account. Or use the sign up link to create an account.
- No data will be stored in our cloud.  Your Matatika Account keeps your data safe with [Auth0](https://auth0.com/)
1. Create your first Workspace.  All configuration is managed as code in your `workspaces` directory:
```
ls -al matatika-ce/workspaces
```

Congratulations, you can now manage all your data with the Matatika Community Edition!

[Make Your First API Call]({{site.baseurl}}/how-to-guides/use-the-matatika-api/making-your-first-api-call){: .btn}
{: .text-center}

---

## Update
To update the Community Edition to the latest version, within the `matatika-ce` directory, run

```sh
git pull
```

If a new version has been released, this will bring in upstream changes to the `docker-compose.yml` file referencing new image tags. [Check here for new releases.](https://github.com/Matatika/matatika-ce/releases)

### Specific version
To update (or rollback) to a specific release version, within the `matatika-ce` directory, run

```sh
git checkout main
git pull
git checkout <RELEASE TAG>
# e.g. `git checkout 10244` for https://github.com/Matatika/matatika-ce/releases/tag/10244
```

To find what release tags are available, [check here](https://github.com/Matatika/matatika-ce/tags), or run

```
git tag --list
```

---

## Further Reading

- Create your first pipeline: [Create A Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)

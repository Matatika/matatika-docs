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

1. Go to [https://github.com/Matatika/matatika-ce](https://github.com/Matatika/matatika-ce), clone the repository and use Docker Compose to run the application:
    ```sh
    git clone https://github.com/Matatika/matatika-ce
    cd matatika-ce

    # depending on the version of Docker you have installed, Docker Compose may not
    # exist as its own executable, but as a subcommand of `docker` instead - in this
    # case, you should substitute the below `docker-compose` with `docker compose`
    #
    # if you are using Docker Desktop for Linux, do not set `userID` or `groupID` as
    # this will interfere with the VM file sharing service (i.e. just run
    # `docker compose up`)
    userID=$(id -u) groupID=$(id -g) docker-compose up
    ```

    Coffee time. This may take a few minutes to download the Docker images on the first run.

    If you plan on hosting the lab for other users to connect to, we suggest setting your own secret in the `docker-compose.yml` using the environment variable `MATATIKA_AUTH_LOCAL_SECRET`.

1. Once everything is running, go to `localhost:3443` in your browser, then login with your Matatika account or use the sign up link to create one.

    No data will be stored in our cloud. Your Matatika account keeps your data safe with [Auth0](https://auth0.com/).

1. Create your first workspace. All configuration is managed as code in your `workspaces` directory:

    ```sh
    ls -al workspaces
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

## Specify a Custom Auth0 Identity Provider
The Community Edition can be configured to use a custom Auth0 identity provider, if required. This will replace Matatika as the default identity provider responsible for login and user authentication.

1. [Create a new Single Page Web Application](https://auth0.com/docs/get-started/auth0-overview/create-applications/single-page-web-apps)
1. Click `Settings` and add
    ```
    https://localhost:3443
    ```
    to `Allowed Callback URLs`, `Allowed Logout URLs` and `Allowed Web Origins`
1. Export the following environment variables:
    ```sh
    # your tenant domain ("Settings" > "Basic Information" > "Domain")
    export APP_IDENTITY_DOMAIN=

    # your client ID ("Settings" > "Basic Information" > "Client ID")
    export APP_IDENTITY_CLIENT_ID=

    # your client database connection name ("Connections" > "Database")
    export APP_IDENTITY_CONNECTION=

    # your tenant identity provider settings (run once `APP_IDENTITY_DOMAIN` is set
    # - do not modify)
    export CATALOG_AUTH_IDPS_PRIMARY_ISSUER_URI=https://$APP_IDENTITY_DOMAIN/
    export CATALOG_AUTH_IDPS_PRIMARY_JWK_SET_URI=https://$APP_IDENTITY_DOMAIN/.well-known/jwks.json

    # optional secondary tenant identity provider settings
    # export CATALOG_AUTH_IDPS_SECONDARY_ISSUER_URI=
    # export CATALOG_AUTH_IDPS_SECONDARY_JWK_SET_URI=
    ```
1. Run the application:
    ```sh
    # depending on the version of Docker you have installed, Docker Compose may not
    # exist as its own executable, but as a subcommand of `docker` instead - in this
    # case, you should substitute the below `docker-compose` with `docker compose`
    #
    # if you are using Docker Desktop for Linux, do not set `userID` or `groupID` as
    # this will interfere with the VM file sharing service (i.e. just run
    # `docker compose up`)
    userID=$(id -u) groupID=$(id -g) docker-compose up
    ```

---

## Further Reading

- Create your first pipeline: [Create A Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)

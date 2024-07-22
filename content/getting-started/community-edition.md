---
title: Community Edition
permalink: /getting-started/community-edition
nav_order: 3
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

    ---

    During startup, if you encounter this error

    ```
    Elasticsearch: Max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
    ```

    you will need to run the following command before retrying:

    ```sh
    sysctl -w vm.max_map_count=262144  # https://stackoverflow.com/a/51448773/19106124
    ```

1. Once everything is running, go to the Matatika Lab at `localhost:3443` in your browser, then login with your Matatika account or use the sign up link to create one.

    No data will be stored in our cloud. Your Matatika account keeps your data safe with [Auth0](https://auth0.com/).

1. [Initialise a meltano project](https://docs.meltano.com/getting-started/part1#create-your-meltano-project) here or [create your first workspace]({{site.baseurl}}/tutorials/creating-workspaces/) with the Matatika lab. All configuration is managed as code in your `workspaces` directory:

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
If you want to use your own company login from within the UI, the Community Edition can be configured to use a custom Auth0 identity provider. This will replace Matatika as the default identity provider responsible for login and user authentication.

1. [Create a new Single Page Web Application](https://auth0.com/docs/get-started/auth0-overview/create-applications/single-page-web-apps)
1. Click `Settings` and add
    ```
    https://localhost:3443
    ```
    to `Allowed Callback URLs`, `Allowed Logout URLs` and `Allowed Web Origins`
1. [Create a new API](https://auth0.com/docs/get-started/auth0-overview/set-up-apis)
1. In `Identifier *` add:
    ```
    http://localhost:8080/api
    ```

    Terminal
    {: .tab .tabs-section-start}

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

    `docker-compose.yml`
    {: .tab}

    ```yml
    services:
        catalog:
            environment:
                # your tenant domain ("Settings" > "Basic Information" > "Domain")
                - APP_IDENTITY_DOMAIN=
                # your client ID ("Settings" > "Basic Information" > "Client ID")
                - APP_IDENTITY_CLIENT_ID=
                # your client database connection name ("Connections" > "Database")
                - APP_IDENTITY_CONNECTION=
                # your tenant identity provider settings
                - CATALOG_AUTH_IDPS_PRIMARY_ISSUER_URI=https://<app_identity_domain>/
                - CATALOG_AUTH_IDPS_PRIMARY_JWK_SET_URI=https://<app_identity_domain>/.well-known/jwks.json
                # optional secondary tenant identity provider settings
                # - CATALOG_AUTH_IDPS_SECONDARY_ISSUER_URI=
                # - CATALOG_AUTH_IDPS_SECONDARY_JWK_SET_URI=
    ```
    {: .tabs-section-end}
   
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

## Specify a Custom Google OAuth Provider
The Matatika UI supports OAuth sign-in for any of the avialable Google plugins, to make configuration easy for a user. To take advantage of this, you will need to provide your own Google OAuth client ID credentials for a web application.

1. [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project)
1. Enable any of the following APIs for your project, based on your requirements: 
    - [Google Ads API](https://console.cloud.google.com/apis/library/googleads.googleapis.com)
    - [Google Analytics API](https://console.cloud.google.com/apis/library/analytics.googleapis.com)
    - [Google Drive API](https://console.cloud.google.com/apis/library/drive.googleapis.com)
    - [Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
1. [Create OAuth client ID credentials for a web application](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)
    
    Under `Under Authorized JavaScript origins`, click `Add URI` and set to
    ```
    https://localhost:3443
    ```

    Under `Authorised redirect URIs`, click `Add URI` and set to
    ```
    https://localhost/oauth2-google
    ```
1. Export the following environment variables:
    ```sh
    # your client ID ("Additional information" > "Client ID")
    export OAUTH2_GOOGLE_CLIENT_ID=

    # your client secret ("Additional information" > "Client secrets" > "Client secret")
    export OAUTH2_GOOGLE_CLIENT_SECRET=

    # (run once `OAUTH2_GOOGLE_CLIENT_ID` is set - do not modify)
    export APP_OAUTH_GOOGLE_CLIENT_ID=$OAUTH2_GOOGLE_CLIENT_ID
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

## Specify a Custom Email Service Provider
To allow Matatika CE to send emails (e.g. invitations, job notifications), you can configure a custom email service provider. The following providers are supported:

Provider | Identifier | Settings
--- | --- | ---
[SendGrid](https://sendgrid.com/){:target="_blank"} | `sendgrid` | `API_KEY`<br />`SOURCE_EMAIL`<br />`BYPASS_EMAILS`

Terminal
{: .tab .tabs-section-start}

```sh
# supported email service implementation
export EMAIL_SERVICE_IMPLEMENTATION=sendgrid
# https://docs.sendgrid.com/ui/account-and-settings/api-keys#creating-an-api-key
export SENDGRID_API_KEY=
# email address used to send emails from as the platform
export SENDGRID_SOURCE_EMAIL=noreply@matatika.com
# comma-separated list of email addresses to bypass when sending an email
export SENDGRID_BYPASS_EMAILS=
```

`docker-compose.yml`
{: .tab}

```yml
services:
    catalog:
        environment:
            # supported email service implementation
            - EMAIL_SERVICE_IMPLEMENTATION=sendgrid
            # https://docs.sendgrid.com/ui/account-and-settings/api-keys#creating-an-api-key
            - SENDGRID_API_KEY=
            # email address used to send emails from as the platform
            - SENDGRID_SOURCE_EMAIL=noreply@matatika.com
            # comma-separated list of email addresses to bypass when sending an email
            - SENDGRID_BYPASS_EMAILS=
```
{: .tabs-section-end}

---

## Deploy Your Own Plugins
To deploy your own plugins to use in the Matatika UI, you just need to drop the `plugin.yml` file into the root `plugins` folder of the `matatika-ce` repository. (Make sure to put it in the correct plugin type).

By default the CE will detect and automatically deploy any new plugins found, which you can use right away by installing them into your workspace from the plugins screen.

### Add plugins to your Meltano project
The CE can be used as a private plugin index for a Meltano project, removing the dependency on [Meltano Hub](https://hub.meltano.com/) entirely.

Simply configure Meltano with the following environment:


Terminal
{: .tab .tabs-section-start}

```sh
# all supported plugins
export MELTANO_HUB_API_ROOT=http://localhost:8080/api

# all installed plugins for a workspace
# export MELTANO_HUB_API_ROOT=http://localhost:8080/api/workspaces/<workspace_id>

# profile menu > "API Keys" > "Developer Token" 
export MELTANO_HUB_URL_AUTH='Bearer <auth_token>'
```

`docker-compose.yml`
{: .tab}

```yml
services:
    catalog:
        environment:
            # all supported plugins
            - MELTANO_HUB_API_ROOT=http://localhost:8080/api

            # all installed plugins for a workspace
            # - MELTANO_HUB_API_ROOT=http://localhost:8080/api/workspaces/<workspace_id>

            # profile menu > "API Keys" > "Developer Token" 
            - MELTANO_HUB_URL_AUTH='Bearer <auth_token>'
```
{: .tabs-section-end}

Meltano will now reference the CE for plugin definitions, meaning that you can deploy a plugin and then `meltano add` it to your project straight away - no UI required.

```sh
# deploy plugin
cd matatika-ce
mv tap-example--custom.yml plugins/extractors

# add plugin to project
cd workspaces/my-project
meltano add extractor tap-example
```

## Configuring HTTPS

Note that you will need to follow the steps to [configure your own Auth0 IDP](#specify-a-custom-auth0-identity-provider), making sure to replace references to `localhost` with your custom domain.

1. Generate a keystore and a certificate/key entry using OpenSSL:

    ```sh
    openssl pkcs12 -export \
        -in <path_to_certificate> \
        -inkey <path_to_key> \
        -out config/certs/keystore.p12 \
        -name springboot \
        -passout pass:password
    ```

1. Provide the following environment configuration for the `catalog` and `app` services:

    ```yml
    services:
        catalog:
            environment:
                - SERVER_PORT=8443
                - SERVER_SSL_ENABLED=true
                - SERVER_SSL_KEY_STORE=/certs/keystore.p12
                - SERVER_SSL_KEY_STORE_PASSWORD=password
                - SERVER_SSL_KEY_STORE_TYPE=pkcs12
                - SERVER_SSL_KEY_ALIAS=springboot
                # - SERVER_SSL_KEY_PASSWORD=  # leave commented out for no password
                - CATALOG_URL=https://<domain>:8443/api
                - CATALOG_ALLOWED_ORIGINS=https://<domain>:3443
                - CATALOG_AUTH_IDPS_LOCAL_ISSUER_URI=https://<domain>:8443
                - CATALOG_AUTH_IDPS_LOCAL_AUDIENCE=https://<domain>:8443/api
                - CATALOG_AUTH_IDPS_PRIMARY_AUDIENCE=https://<domain>:8443/api
                - CATALOG_AUTH_IDPS_SECONDARY_AUDIENCE=https://<domain>:8443/api
                - APP_URL=https://<domain>:8443
                - APP_SERVER_URI=https://<domain>:8443/api
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

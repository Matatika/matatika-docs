---
title: CLI
permalink: /cli/
nav_order: 8
has_children: true
---

# {{page.title}}

A command-line interface for interacting with Matatika services.
{: .fs-5 }

---

## Installation

### Prerequisites
- Python >=3.7
- pip

The Matatika CLI/SDK is available through PyPi [here](https://pypi.org/project/matatika/){:target="_blank"} and can be installed using `pip`:

```
pip install matatika
```

You can check if the CLI/SDK installed successfully by running the following command:

```
matatika --version
```

## Variables

For all commands, the CLI requires an **authentication token** and **endpoint URL** to make successful HTTP requests to the Matatika API. Sometimes, a **workspace ID** is also required if the operation is specific to a workspace (i.e. listing all datasets in or publishing datasets to a workspace). The CLI can resolve these variables from one of the following sources, respecting the order of precedence as listed:

1. Command option
1. System environment
1. Default context

Each variable is resolve separately, meaning that it is possible to - for example - specify a **authentication token** as an environment variable, a **endpoint URL** as a command option and a **workspace ID** in the default context. When specifying a variable in more than one source, the CLI will check each by the order of precedence define above and resolve the first variable it finds. For debugging purposes, including the `-t` / `--trace` flag on the base `matatika` command will print the value and source of each resolved variable before processing the statement.

### Command option
`-a` / `--auth-token` and `-e` / `--endpoint-url` options can be specified on the base [`matatika`](matatika) command.
`-w` / `--workspace-id` can be specified on certain commands that involve interacting with a workspace (e.g. the [`list datasets` command]({{site.baseurl}}/cli/list#datasets)). See command-specific documentation for more information.

Additionally, including `--help` after any CLI command will provide detailed information on its usage.

### System environment
```bash
# set an authentication token
export AUTH_TOKEN=$AUTH_TOKEN_VALUE

# set an endpoint URL
export ENDPOINT_URL=$ENDPOINT_URL_VALUE

# set a workspace ID
export WORKSPACE_ID=$WORKSPACE_ID_VALUE
```

### Default context
See the documentation for [creating a context]({{site.baseurl}}/cli/context#create) and [using a context]({{site.baseurl}}/cli/context#use).

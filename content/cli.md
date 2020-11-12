---
layout: default
title: CLI
permalink: /cli
nav_order: 8
---

# {{page.title}}

A command-line interface for interacting with Matatika services.
{: .fs-5 }

---

## Installation
{: .no_toc}

### Prerequisites
- Python >=3.7
- pip

The Matatika CLI/SDK is available through PyPi [here](https://pypi.org/project/matatika/) and can be installed using `pip`:

```
pip install matatika
```

You can check if the CLI/SDK installed succesfully by running the following command:

```
matatika --version
```

The available commands are documented below.

---

#### Commands

- TOC
{: toc}

---

## `matatika`

{% include snippets/cli/matatika.md %}

## `login`

{% include snippets/cli/matatika_login.md %}

## `list`

{% include snippets/cli/matatika_list.md %}

## `list workspaces`

{% include snippets/cli/matatika_list_workspaces.md %}

## `list datasets`

{% include snippets/cli/matatika_list_datasets.md %}

## `use`

{% include snippets/cli/matatika_use.md %}

## `fetch`

{% include snippets/cli/matatika_fetch.md %}

## `publish`

{% include snippets/cli/matatika_publish.md %}

---
layout: default
title: Library
permalink: /library
nav_order: 7
---

# {{page.title}}

A python library for interacting with Matatika services.
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

You can check if the CLI/SDK installed successfully by running the following command:

```
matatika --version
```

The available classes and methods are documented below.

---

{% include snippets/sdk/library.md %}
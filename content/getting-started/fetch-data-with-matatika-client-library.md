---
layout: default
title: Fetch Data with the Matatika Client Library (CLI)
permalink: /getting-started/fetch-data-with-the-matatika-client-library-cli
parent: Getting Started
nav_order: 5
---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.app_url}}) or API
- Published a dataset or access to an existing dataset

Refer to the previous [Getting Started guides]({{site.baseurl}}/getting-started) if you are unsure of these requirements.

---

## Introduction

Each dataset has a `data` endpoint, which returns live data from the database workspace schema based on the dataset `query`. The Matatika CLI `fetch` command is used to tap into this endpoint and return a snapshot of the dataset data at that instance.

---

## Fetching Data

Dataset data can be fetched by invoking `fetch` in the following way:

- If you have previously used `login` to supply an authentication token, you do not need to specify it here with `-a`

### Windows

```bat
matatika fetch -d %DATASET_ID% -a %AUTH_TOKEN%
```

### macOS/Linux

```bash
matatika fetch -d $DATASET_ID -a $AUTH_TOKEN
```

The command output will take the following format:

```
*** START DATASET <dataset-id> DATA CHUNK STDOUT DUMP ***
<dataset-data>
*** END DATASET <dataset-id> DATA CHUNK STDOUT DUMP ***
```

---

You can output the data dump to a file using the following syntax:

### Windows

```bat
:: output to a txt file with the name 'data_<dataset-id>'
matatika fetch -d %DATASET_ID% -a %AUTH_TOKEN% > data_%DATASET_ID%.txt
```

### macOS/Linux

```bash
# output to a txt file with the name 'data_<dataset-id>'
matatika fetch -d $DATASET_ID -a $AUTH_TOKEN > data_$AUTH_TOKEN.txt
```

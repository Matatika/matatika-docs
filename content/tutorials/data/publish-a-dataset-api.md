---
title: Publish a Dataset (API)
permalink: /tutorials/data/publish-a-dataset-api
parent: Data
grand_parent: Tutorials
nav_order: 5
---

# {{page.title}}

- Time required: *5 minutes*

---

## Prerequisites
You must have already:
- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API

---

## Introduction

When you "publish a dataset" you are creating a data view or visualisation within a workspace. A dataset must have an unique identifier within a workspace, which is achieved through an `alias`, and you can even publish an empty dataset using just an `alias`. In this example, we will provide a some raw data and a simple visualisation.

First, we will need to obtain the workspace ID of the workspace we wish to publish our dataset to. Following the same steps as in [Making Your First API Call]({{site.baseurl}}/tutorials/api/making-your-first-api-call) for your preferred API client, we can perform a GET request to the `/workspaces` endpoint to return a collection of the workspaces our profile is a member of. The response should contain the details of the workspace we created when signing into the Matatika app for the first time. From here, we will need to find the `id` property and extract its value - our workspace ID.

Now, we will perform a POST request to the `workspaces/{workspace-id}/datasets` path in order to publish a dataset to our workspace, providing the following fields in the request body:

Field | Description | Example
--- | --- | ---
`"alias"` | A workspace-unique dataset identifier | `"planet-orbits"`
`"title"` | The dataset title | `"Planet Orbits in Our Solar System (Mercury-Saturn)"`
`"description"` | A description of the dataset | `"Sun orbit data for Mercury, Venus, Earth, Mars, Jupiter and Saturn"`
`"questions"` | The question(s) the dataset may answer | `"How many Earth-years does it take for Jupiter to orbit the sun?"`
`"rawData"` | The raw data of the dataset | `"[[\"Planet\", \"Orbit Distance (Light-hours)\", \"Orbit Duration (Earth-years)\"],[\"Mercury\", 0.3336, 0.2500],[\"Venus\", 0.6300, 0.5833],[\"Earth\", 0.8708, 1],[\"Mars\", 1.3242, 1.9167],[\"Jupiter\", 4.5287, 11.8333],[\"Saturn\", 8.2997, 29.5000]]"`
`"visualisation"` | The visualisation metadata, defined by [Google Charts](https://developers.google.com/chart/interactive/docs/quick_start){:target="_blank"} | `"{\"google-chart\": {\"chartType\": \"Bar\", \"options\": {\"width\" : 600, \"height\" : 400}}}"`

## cURL
Again, make sure to substitute `$ACCESS_TOKEN` or `%ACCESS_TOKEN%`with your API token and `$WORKSPACE_ID` or `%WORKSPACE_ID%` with your workspace ID.

### macOS/Linux
```bash
curl -i \
    -H "Content-Type: application/hal+json" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -d '{' \
    '"alias": "planet-orbits", ' \
    '"title": "Planet Orbits in Our Solar System (Mercury-Saturn)", ' \
    '"description": "Sun orbit data for Mercury, Venus, Earth, Mars, Jupiter and Saturn", ' \
    '"questions": "How many Earth-years does it take for Jupiter to orbit the sun?", ' \
    '"rawData": "[[\"Planet\", \"Orbit Distance (Light-hours)\", \"Orbit Duration (Earth-years)\"],[\"Mercury\", 0.3336, 0.2500],[\"Venus\", 0.6300, 0.5833],[\"Earth\", 0.8708, 1],[\"Mars\", 1.3242, 1.9167],[\"Jupiter\", 4.5287, 11.8333],[\"Saturn\", 8.2997, 29.5000]]", ' \
    '"visualisation": "{\"google-chart\": {\"chartType\": \"Bar\", \"options\": {\"width\" : 600, \"height\" : 400}}}"' \
    '}' \
    {{ site.matatika.links.catalog }}/api/workspaces/$WORKSPACE_ID/datasets
```

### Windows
```bat
curl -i ^
    -H "Content-Type: application/hal+json" ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    -d "{" ^
    """alias"": ""planet-orbits"", " ^
    """title"": ""Planet Orbits in Our Solar System (Mercury-Saturn)"", " ^
    """description"": ""Sun orbit data for Mercury, Venus, Earth, Mars, Jupiter and Saturn"", " ^
    """questions"": ""How many Earth-years does it take for Jupiter to orbit the sun?"", " ^
    """rawData"": ""[[\""Planet\"", \""Orbit Distance (Light-hours)\"", \""Orbit Duration (Earth-years)\""],[\""Mercury\"", 0.3336, 0.2500],[\""Venus\"", 0.6300, 0.5833],[\""Earth\"", 0.8708, 1],[\""Mars\"", 1.3242, 1.9167],[\""Jupiter\"", 4.5287, 11.8333],[\""Saturn\"", 8.2997, 29.5000]]"", " ^
    """visualisation"": ""{\""google-chart\"": {\""chartType\"": \""Bar\"", \""options\"": {\""width\"" : 600, \""height\"" : 400}}}""" ^
    "}" ^
    {{ site.matatika.links.catalog }}/workspaces/%WORKSPACE_ID%/datasets
```

## Postman
{% raw %}
Within the Matatika API collection, find the *Publish a workspace dataset* request under the *Workspaces* folder. [Follow these steps](https://learning.postman.com/docs/sending-requests/variables/){:target="_blank"} to assign the variable `{{workspace-id}}` with the value of the workspace ID we obtained earlier, and press the *Send* button.
{% endraw %}

---

That's all there is to it! If everything was set up correctly, you should have received a response with a status of `201 Created` and a body containing information about the dataset you just published. Subsequent requests to this same URL using the same `alias` will yield a status of `200 OK`. You should also see your dataset appear in the [Matatika app]({{site.matatika.links.app}}) within the context of the workspace you published to.

![successfully published dataset in the matatika app]({{site.baseurl}}/assets/img/app-published-dataset.png)
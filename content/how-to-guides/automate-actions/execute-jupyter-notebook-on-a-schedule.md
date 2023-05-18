---
title: Execute a Jupyter Notebook on a Schedule
permalink: /how-to-guides/automate-actions/run-a-jupyter-notebook-on-a-schedule
parent: Automate Actions
grand_parent: How-To Guides
nav_order: 2
---

# {{page.title}}

*Time required: **10 minutes***

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API
- A Jupyter Notebook you want to run on a schedule

---

## Introduction

In this getting how-to guide, we will go through the steps of creating a pipeline that exectues a Jupyter Notebook on a schedule. 

Using a pipeline like this you can easily produce daily reports, automate some data processing or even execute machine learning models on a schedule.

---

### Set Up Steps

1. Create a Workspace
1. In your workspace, go to the Lab, then the `Settings` page. Here find your Repository Url.
1. `git clone` your workspace repository from GitHub and open it, or just open your repository on your local system if using the Matatika CE or Ext.
1. Put or Create a Jupyter Notebook in the `notebook/` directory.
1. If you cloned from GitHub you need to `git add`, `git commit` and `git push` your changes back to the GitHub repository.
1. Back in your workspace, go to the Lab, then to the Plugins page.
1. On the `AVAILABLE` tab find the Notebook plugin and click `INSTALL`
1. Go to the Pipelines page.
1. Click the `+ PIPELINE` button in the top right of the page.
1. Fill in the name field then click the square with the `+` sign just below name, add the Notebook plugin from the `NEW` tab.
1. Expand out `Settings` and `notebook`, and fill in the `Path *` setting. This will be `notebook/your_file_name.ipynb`
1. If you want to convert your executed Jupyter Notebook, check out the docs on the left of the screen for help with the other settings.
1. Next expand out `Actions`, click `Custom` and from the drop down select the appropriate `notebook:` command based on what behaviour you want. `notebook:run` should be your default.
1. Expand out `Schedule` and pick how often you want this pipeline to run.
1. Click `Save`. A green bar will appear at the top of your screen telling you your pipeline was saved.
1. Head back to the `Pipelines` screen, where for the next 10 to 20 seconds a `config job` will be running on your pipeline. This will set everything up and commit your new pipeline to your workspace repository.
1. Once the `config job` has completed you are free to run your pipeline, or leave it to its schedule.

---

### Using Matatika CE or Mataika Ext

When your pipeline runs you will be able to open your Notebook and see that it has been executed. You will also be able to see any files output by your notebook if this is expected when it runs.

### Using Matatika Cloud

When running your pipeline in the cloud, you will not be able to see any immediate effects unless something that executes within the notebook sends an email or slack notificaion ect. No run cells in your notebook or output files will be commited to your workspace repository.

Now we have the Notebook execution scheduled, we can extend our pipeline, to get and process the Notebook or its output further.

---

## Extending the Pipeline

These are just a few ideas on what you could do next to extend your pipeline. Remember you can do as much as you want in one pipeline, so mix and match to whatever suits your use case.

### Send an Email

In your Matatika workspace Lab, in the plugins page you will find another plugin called Sendgrid. This plugin lets you send an email, choosing who to recieve it, the subject, body and any attachments.

You can install the Sendgrid plugin, add it to your Notebook pipeline, fill in the required settings and credentials, then treat your Notebook as a report to send out on a schedule. You can even take advantage of the Notebook plugins built in PDF conversion to create a nicely formatted report to send out.

The Sendgrid plugin can also just be used to send a spreadsheet out on a schedule, or even just a notificaion email that the Notebook plugin pipeline has finished.

### Publish your Notebook

In your Matatika workspace Lab, in the plugins page you will find another plugin called Matatika. This plugin lets you publish Jupyter Notebooks and Matatika Datasets to your workspace during a pipeline.

You can install the Matatika plugin, add it to your Notebook pipeline, choose what Notebook you want to publish and have it published to your workspace on every pipeline run. This way you can invite other users to your workspace and they would be able to see the results of your Notebook whenever they need.

### Multiple Notebooks

You can have your Pipeline run multiple Notebooks, passing data from one to the next.

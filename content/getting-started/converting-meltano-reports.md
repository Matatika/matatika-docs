---
title: Converting Meltano Reports
permalink: /getting-started/converting-meltano-reports
parent: Getting Started
nav_order: 7
---

# {{page.title}}

- Time required: *10 minutes*

---

## Prerequisites
You must have ready:
- Your meltano project(s) and report(s) available on your local system.

---

## Introduction

Matatika has made a custom converter to turn Meltano reports into Matatika datasets. In this example, we shall go though all the steps needed to complete the conversion, so you can customise your datasets even further using the Matatika dataset format.

---

## Converting Meltano Reports Locally

1. First open the terminal and navigate to the directory above the Meltano project you have chosen to convert reports for.

2. `git clone` the `matatika-meltano-report-converter` repository, found at: [https://github.com/Matatika/matatika-meltano-report-converter](https://github.com/Matatika/matatika-meltano-report-converter){:target="_blank"}.

3. `cd` into your meltano project.

4. Run the command `meltano add --custom utility matatika-meltano-report-converter`. You will then be prompted to fill in some details about the custom utility:
- `(namespace)`: Press Enter (empty = default value)
- `(pip_url)`: `-e ../matatika-meltano-report-converter` or your local directory of the cloned converter repo
- `(executable)`: Press Enter (empty = default value)

5. Meltano will then add and install the `matatika-meltano-report-converter`. This may take up to 30 seconds.

6. Upon completion of the installation you can run the command `meltano invoke matatika-meltano-report-converter`.

7. Any meltano report you have saved in the default location  `.meltano/analyze/reports`  will be found and converted into Matatika dataset YAMLs. These new datasets can be found in a directory called `converted_meltano_reports` in the root of your Meltano project.

You can see what an example meltano project with converted datasets looks like on our github here: [Example Meltano Project](https://github.com/Matatika/matatika-examples/tree/master/converting_meltano_reports){:target="_blank"}

## Working With Your Converted Datasets

Now you have your Matatika datasets, you can easily change, customize and publish them.

[Matatika Dataset Documentation]({{site.baseurl}}/dataml/datasetml/){: .btn}
{: .text-center}

[Publish Your First Dataset]({{site.baseurl}}/getting-started/publish-a-dataset-cli){: .btn}
{: .text-center}




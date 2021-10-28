---
layout: default
title: Custom Scripts
permalink: /data-import/custom-scripts
nav_order: 1
parent: Data Import
---

# {{page.title}}

---

Custom scripts can be used by [data imports]({{site.baseurl}}/glossary#data-import) by choosing `Advanced` from `Section 2 - Clean, transform and organise` when creating or editing your data import.

By passing a custom script to a data import you can completly control the your data import's enviroment as well as provide custom step to happen during your data import run.

---

## Basics

Custom scripts are bash scripts that generally invoke [Meltano](https://meltano.com/docs/plugin-management.html) commands. As mentioned before you can also control the [data import's]({{site.baseurl}}/glossary#data-import) enviroment in these scripts as seen in the `Default actions` script below:
```bash
export EXTRACTOR='[(${pipeline.dataSource.extractor.name})]'
export LOADER='[(${pipeline.dataStore.loader.name})]'

script="orchestrate/$EXTRACTOR/elt.sh"
if [ -f "$script" ]; then . "$script"; exit $?; fi

# install plugins
meltano install extractor "$EXTRACTOR"
meltano install loader "$LOADER"
meltano install transform "$EXTRACTOR"
meltano install transformer dbt

transform='skip'
if [ -d .meltano/transformers/dbt ]; then
    transform='run'
fi

# run elt
meltano elt "$EXTRACTOR" "$LOADER" --transform="$transform"
```

Above is the exact script that is run by default on a data import run. 

- First it determines the data source and data store name from the pipeline (data import).
- Then attempts to find any custom scripts we sometimes include in an [analyze file bundle](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary#analyze-file-bundle), if your data source came with one.
- If it finds one of our custom scripts, it runs those steps instead. Otherwise:
- Install the meltano plugins relevant to this data import run.
- Work out if there are transforms to be done with dbt
- Finally run the `meltano elt` with the transform setting being worked out in the previous step.

As seen in the `Default actions` script, you can do anything you could normally do with bash. Set enviroment variables you want, change ones that are pre-set, handle conditional logic, add or remove data processing steps and so on.

---

## Recommendations

### Minimal Script

Generally at a minimum you will need to:

```bash
meltano install
meltano elt <tap_name> <target_name>
```

Running `meltano install` will install all plugins in your workspace. You can run `meltano install <plugin_type> <plugin_name>` to install specific ones if you wish.

`meltano elt <tap_name> <target_name>` is the actual command to run the data import and get your data into your data store.

### Using Meltano To Invoke Other Plugins

```bash
meltano invoke dbt deps
meltano invoke dbt run
```

By invoking other plugins through Meltano, you gain the benefit of Meltano taking base level enviroment variables and passing them these plugins to use. This isnt perfect in every case, but generally will get you around setting a lot of enviroment variables manually.

## Further Reading

- [Matatika Examples of Custom Scripts](https://github.com/Matatika/matatika-examples/tree/master/example_data_import_scripts)
- [Matatika Technical Glossary](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary#custom-data-source)
- [Meltano Documentation](https://meltano.com/docs/plugin-management.html)
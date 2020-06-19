# matatika-docs
The Matatika public developer documentation.

## Run Locally
### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- Ability to run API SITs, which in turn auto-generate the required snippets

### Inital Setup
First, clone the repository and change into the directory.
```terminal
git clone https://github.com/Matatika/matatika-docs.git
cd matatika-docs
```

Run `import` from the Makefile, providing the argument `FROM_DIR` with the relative path to the directory containing the generated snippets on your local machine. This will copy the snippets from `FROM_DIR` to `./_includes/snippets/`.

- Make sure to specify a closing `/` on the end of the `FROM_DIR` path to copy **only the contents** of the directory (i.e. not including the enclosing folder). This will preserve the intended destination folder structure; therefore conforming to the include paths detailed in the markdown files.

```terminal
make import FROM_DIR=../matatika-sit/target/generated-snippets/
```

Run `docker-compose up` to serve the static site on [localhost:4000](http://localhost:4000/). Note that this process may take a little while to complete on the first time due to dependency installation.

```terminal
docker-compose up
```

## Making Changes
### Creating and Editing Pages
Pages are constructed from markdown files, which are rendered to HTML when the static site is served.

#### Structure
Consider a directory structure with the following markdown files:

```
+-- ..
|-- (Jekyll files)
|
|-- index.md
|-- auth.md
|-- examples.md
|
|-- (Jekyll files)
+-- ..
```

The pages are served as follows: (.html extensions hidden due to `permalink: pretty` in *_config.yml*)

| Markdown File | Relative Path | Page serve URL
| --- | --- | ---
| index | ./ | localhost:4000
| auth | ./ | localhost:4000/auth
| examples | ./ | localhost:4000/examples

Now consider a similar scenario where *auth* and *examples* are enclosed within a new directory *content*:

```
+-- ..
|-- (Jekyll files)
|
|-- index.md
|-- content
|   | auth.md
|   | examples.md
|
|-- (Jekyll files)
+-- ..
```

The pages are now served as follows:

| Markdown File | Relative Path | Page serve URL
| --- | --- | ---
| index | ./ | localhost:4000
| auth | ./content/ | localhost:4000/content/auth
| examples | ./content/ | localhost:4000/content/examples

#### Front Matter
New markdown files must contain relevant [front matter](https://jekyllrb.com/docs/front-matter/) to be displayed correctly:

| Front Matter Variable | Description
| --- | ---
| `layout` | The page layout to apply - in general, use `layout: default`
| `title` | The page title - used to create navigation menu heading
| `permalink` | The page permalink - can be used to override the default provided by the enclosing folder structure
| `nav_order` | The position of the page within its navigation menu scope
| `has_children` | Boolean value incdicating whether the page acts a parent: used to create a hierarchical navigation structure
| `parent` | The `title` value of an existing parent page, indicating whether the page acts as a child: used to create a hierarchical navigation structure

The front matter of `content.md`
```
---
layout: default
title: Content
permalink: /content
has_children: true
nav_order: 2
---
```

To make changes to the generated snippet content, see [matatika-sit](https://github.com/Matatika/matatika-sit).

### Updating Snippets

If the exisiting snippets have been updated by running subsequent API SITs, they can be copied over again by simply re-running the `import` directive. This can be done with the local server already running, where changes to site content are reflected in the static site dynamically.

- If the generated snippets source directory has been modified (e.g. files and/or folders created, renamed or moved), run `clean` from the Makefile beforehand, in order to remove all files and folders within `./_includes/snippets/`. The server will need to be restarted for these changes to take effect.

    ```terminal
    make clean
    make import FROM_DIR=../matatika-sit/target/generated-snippets/
    ```
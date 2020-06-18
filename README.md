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
make import FROM_DIR=../matatika-docs/target/generated-snippets/
```

Run `docker-compose up` to serve the static site on [localhost:4000](http://localhost:4000/). Note that this process may take a little while to complete on the first time due to dependency installation.

```terminal
docker-compose up
```

### Making Changes

### Updating Snippets

If the exisiting snippets have been updated by running subsequent API SITs, they can be copied over again by simply re-running the `import` directive. This can be done with the local server already running, where changes to site content are reflected in the static site dynamically.

- If the generated snippets source directory has been modified (e.g. files and/or folders created, renamed or moved), run `clean` from the Makefile beforehand, in order to remove all files and folders within `./_includes/snippets/`.

    ```terminal
    make clean
    make import FROM_DIR=../matatika-docs/target/generated-snippets/
    ```
# generated snippets should be saved in this location
TO_DIR ?= ./_includes/snippets/
# default location of the snippets
FROM_DIR ?= ../matatika-sit/target/generated-snippets/

# removes all existing snippets (usually proceeded by an import)
clean:
	rm -rfv $(TO_DIR)

# copies all files and folders from the given path argument'FROM_DIR' - this is the
# location where your generated snippets are output to during SIT execution
import:
	mkdir -p $(TO_DIR) && cp -rv $(FROM_DIR)* $(TO_DIR)

dev build: import
	./build-docs.sh '--config _config.yml,_config_dev.yml'

prod build: import
	./build-docs.sh '--config _config.yml,_config_prod.yml'

run: import
	./build-docs.sh '--config _config.yml,_config_dev.yml --watch'
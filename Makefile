# generated snippets should be saved in this location
TO_DIR ?= ./_includes/snippets/
# default location of the snippets
FROM_DIR ?= ../matatika-sit/target/generated-snippets/

.DEFAULT: help
help:
	@echo "make clean"
	@echo "       clean the environment, removing the 'TO_DIR'"
	@echo "make import"
	@echo "       copies all files and folders from the given 'FROM_DIR'"
	@echo "make dev"
	@echo "       build for www-staging.matatika.com"
	@echo "make prod"
	@echo "       build for www.matatika.com"
	@echo "make run"
	@echo "       run the jekyll build and watch for changes"

# removes all existing snippets (usually proceeded by an import)
clean:
	rm -rfv $(TO_DIR)

# copies all files and folders from the given path argument'FROM_DIR' - this is the
# location where your generated snippets are output to during SIT execution
import:
	mkdir -p $(TO_DIR) && cp -rv $(FROM_DIR)* $(TO_DIR)

dev: import
	./build-docs.sh '--config _config.yml,_config_dev.yml'

prod: import
	./build-docs.sh '--config _config.yml,_config_prod.yml'

run: import
	./build-docs.sh '--config _config.yml,_config_dev.yml --watch'
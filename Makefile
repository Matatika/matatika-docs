# generated snippets should be saved in this location
TO_DIR ?= _includes/snippets
# default location of the snippets
FROM_DIR ?= ../matatika-sit/target/generated-snippets

.DEFAULT: help
help:
	@echo "make clean"
	@echo "       removes all imported snippets"
	@echo "make import"
	@echo "       copies all files and folders from the given 'FROM_DIR'"
	@echo "make import-dev"
	@echo "       downloads all snippets from the dev Azure Blob storage container"
	@echo "make import-prod"
	@echo "       downloads all snippets from the prod Azure Blob storage container"
	@echo "make dev"
	@echo "       build for www-staging.matatika.com"
	@echo "make prod"
	@echo "       build for www.matatika.com"
	@echo "make run"
	@echo "       run the jekyll build and watch for changes"

# removes all imported snippets
clean:
	@rm -rf $(TO_DIR)/*

# make 'TO_DIR', if it doesn't already exist
_create_to_dir: clean
	@mkdir -p $(TO_DIR)

# check appropriate az credentials are set
_check_az_env:
	@test -n "$(AZURE_STORAGE_KEY)" || (echo 'AZURE_STORAGE_KEY not set' && exit 1)

# copies all files and folders from the given path argument'FROM_DIR' - this is the
# location where your generated snippets are output to during SIT execution
import: _create_to_dir
	@cp -r $(FROM_DIR)/* $(TO_DIR)

IMPORT_BLOB_SNIPPETS := AZURE_STORAGE_ACCOUNT=matatika AZURE_STORAGE_KEY=$(AZURE_STORAGE_KEY) az storage blob download-batch -d $(TO_DIR) -s

# download snippets from dev Azure Blob storage container
import-dev: _create_to_dir _check_az_env
	@$(IMPORT_BLOB_SNIPPETS) dev-generated-snippets

# download snippets from prod Azure Blob storage container
import-prod: _create_to_dir _check_az_env
	@$(IMPORT_BLOB_SNIPPETS) prod-generated-snippets

dev: import
	./build-docs.sh '--config _config.yml,_config_dev.yml'

prod: import
	./build-docs.sh '--config _config.yml,_config_prod.yml'

run: import
	./build-docs.sh '--config _config.yml,_config_dev.yml --watch --force-polling --incremental'
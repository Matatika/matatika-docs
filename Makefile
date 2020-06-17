# generated snippets should be saved in this location
TO_DIR = ./_includes/snippets

# removes all existing snippets (usually proceeded by an import)
clean:
		rm -rfv $(TO_DIR)/*

# copies all files and folders from the given path argument'FROM_DIR' - this is the
# location where your generated snippets are output to during SIT execution
import:
		cp -rv $(FROM_DIR) $(TO_DIR)
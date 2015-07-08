
template:
	@read -p "Enter Folder Name:" module; \
	module_dir=./views/$$module; \
	mkdir -p $$module_dir;\
	touch $$module_dir/layout.hbs;\
	touch $$module_dir/layout.jade;\
	touch $$module_dir/$$module.jade;\
	touch $$module_dir/$$module.hbs




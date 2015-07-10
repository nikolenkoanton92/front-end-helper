template:
	@read -p "Enter Parent Name:" module; \
	views_dir=./views/$$module;\
	style_dir=./public/stylesheets/$$module;\
	mkdir -p $$views_dir;\
	mkdir -p $$style_dir;\
	touch $$views_dir/layout.hbs;\
	touch $$views_dir/layout.jade;\
	touch $$views_dir/index.jade;\
	touch $$views_dir/index.hbs;\
	touch $$style_dir/style.css

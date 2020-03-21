.PHONY: ios gen intl

ios:
	yarn ios

gen:
	yarn generate

intl:
	yarn extract:i18n

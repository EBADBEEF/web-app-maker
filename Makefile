.NOTPARALLEL: default
default: lint zip

lint:
	nix shell 'nixpkgs#web-ext' -c web-ext lint

zip:
	rm -f site_popup.zip
	7z a site_popup.zip manifest.json background.js

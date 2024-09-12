.NOTPARALLEL: default
default: lint zip

lint:
	nix shell 'nixpkgs#web-ext' -c web-ext lint

zip:
	rm -f web_app_popup.zip
	7z a web_app_popup.zip manifest.json background.js

clean:
	rm -f *.zip

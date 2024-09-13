.NOTPARALLEL: default
default: lint zip

lint:
	nix shell 'nixpkgs#web-ext' -c web-ext lint

zip:
	rm -f web_app_maker.zip
	7z a web_app_maker.zip manifest.json background.js action.html action.js

clean:
	rm -f *.zip

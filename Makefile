help:	## Show this help.
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)

build:	## Compile TypeScript into JavaScript, then build (create) a new .js file or update an existing one.
	node_modules/.bin/tsc --project tsconfig.json

run:	## Compile TypeScript into JavaScript, then execute the TypeScript code.
	node_modules/.bin/ts-node ${file}

build-run var:	## Build and execute .ts file, run commands build -> run.
	make build ${file}
	make run ${file}

tests_run:	## Run tests
	node_modules/.bin/jest
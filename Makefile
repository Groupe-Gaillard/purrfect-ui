CAROOT=$(CURDIR)/certs/root
export CAROOT
TRUST_STORES=system,nss
export TRUST_STORES

SERVICE=storybook

up: certs pull
	@printf "💄 Please wait we take care of all...\n\n"
	docker compose build --parallel --build-arg USER_ID=$(USER_ID)
	docker compose up --detach --remove-orphans
	@printf "\n\nEverything is ready, enjoy 🎉\nRun make logs if you want some 💡\n\nYou can see the Storybook on : https://purrfect-ui.localhost/\n\n"
.PHONY: up

pull:
	docker compose pull
.PHONY: pull

down:
	docker compose down --remove-orphans
.PHONY: down

pnpm: ## Run pnpm, pass the parameter "c=" to run a given command, example: make pnpm c='create playwright'
	@$(eval c ?=)
	docker compose exec storybook pnpm $(c)
.PHONY: pnpm

ci:
	docker compose exec storybook pnpm lint:check && docker compose exec storybook pnpm typescript:check
.PHONY: ci

pre-commit: ## Runs some checks & fixes
	docker compose exec storybook sh -c "pnpm run format:check --write && pnpm run lint:check && pnpm run typescript:check && pnpm run test --run"

logs: SERVICE?=
logs: OPTS?=--follow --timestamps --tail=0
logs:
	docker compose logs $(OPTS) $(SERVICE)
.PHONY: logs

certs:
	@mkcert -install || (printf "\n 🛑 mkcert is not installed. Check https://github.com/FiloSottile/mkcert to install it.\n\n" && exit 1)
	@mkcert -key-file ./docker/traefik/certs/key.pem -cert-file ./docker/traefik/certs/cert.pem \
		'purrfect-ui.localhost' \
		'purrfect-ui.traefik.localhost'

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.DEFAULT_GOAL := help

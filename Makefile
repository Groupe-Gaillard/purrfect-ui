CAROOT=$(CURDIR)/certs/root
export CAROOT
TRUST_STORES=system,nss
export TRUST_STORES

SERVICE=storybook

up: certs pull
	@printf "💄 Please wait we take care of all...\n\n"
	docker compose build --parallel --build-arg USER_ID=$(USER_ID)
	docker compose up --detach --remove-orphans
	@printf "\n\nEverything is ready, enjoy 🎉\nRun make logs if you want some 💡\n\n"
.PHONY: up

pull:
	docker compose pull
.PHONY: pull

down:
	docker compose down --remove-orphans
.PHONY: down

logs: SERVICE?=
logs: OPTS?=--follow --timestamps --tail=0
logs:
	docker compose logs $(OPTS) $(SERVICE)
.PHONY: logs

certs:
	@mkcert -install || (printf "\n 🛑 mkcert is not installed. Check https://github.com/FiloSottile/mkcert to install it.\n\n" && exit 1)
	@mkcert -key-file ./docker/traefik/certs/key.pem -cert-file ./docker/traefik/certs/cert.pem \
		'purrfect-ui.localhost'

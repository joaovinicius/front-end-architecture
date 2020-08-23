copy_env:
	cp web/nuxt-app/.env.example Infrastructure/.env

env: copy_env
	sed -i 's/KEY_ARGUMENT/$(key)/g'  web/nuxt-app/.env

install:
	npm install --prefix ./web/nuxt-app/

dev:
	npm run dev --prefix ./web/nuxt-app/


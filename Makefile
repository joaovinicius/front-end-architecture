copy_env:
	cp Infrastructure/.env.example Infrastructure/.env

env: copy_env
	sed -i 's/KEY_ARGUMENT/$(key)/g' Infrastructure/.env

install:
	npm install --prefix ./Infrastructure

dev:
	npm run dev --prefix ./Infrastructure


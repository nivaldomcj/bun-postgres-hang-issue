1. Make sure you're with version 1.1.38 of bun. Install dependencies using:
```sh
bun install
```

2. Make sure to have a postgres instance up and running. You can do it via Docker:
```sh
docker \
    run --name postgres-16 \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -p 5432:5432 \
    -d postgres:16
```

3. Run the project with the following command:
```sh
bun run start
```

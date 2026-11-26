# LingoBlox 1
Layered, modular client (`client/`) + optional microservice platform (`platform/`). See `docs/ARCHITECTURE.md`.
    npm run check   # architecture rules      npm test   # domain + contract tests
    npm run build   # site in out/site        npm run release  # 4 release artifacts
    cd platform && cp deploy/.env.example deploy/.env && docker compose -f deploy/docker-compose.yml up

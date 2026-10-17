# grapi injections

Files in the folders below are encoded into `chart/values.yaml` by `task patch-values-file`.
`task reset-values-file` removes their generated `content` entries again. Do not edit
those generated entries manually.

| Type | Folder | File type | Applied when |
| --- | --- | --- | --- |
| Controllers | `controllers/` or `injections/` | `*.controller.ts` | Backend startup |
| Service providers | `serviceproviders/` | `*.service.ts` | Backend startup |
| Services | `services/` | `*.service.ts` | Backend startup |
| Cache configuration | `cacheconfigs/` | `*.ts` | Backend generation |
| Datasources | `datasources/` | `*.ts` | Datasource generation |
| Discoveries | `discoveries/` | `*.ts` | Discovery generation |
| Fuzzy search | `fuzzysearch/` | `*.ts` | Backend generation |
| Models | `models/` | `*.ts` | Model generation |
| OpenAPI definitions | `openapis/` | `*.ts` | OpenAPI generation |
| Repositories | `repositories/` | `*.ts` | Repository generation |
| REST CRUD configuration | `restcruds/` | `*.ts` | REST CRUD generation |
| Relations | `relations/` | `*.ts` | Relation generation |
| Pre-patches | `prepatches/` | `*.sh` | Before datasource creation |
| Pre-discovery patches | `prediscoverypatches/` | `*.sh` | After datasource creation, before discovery |
| Pre-relation patches | `prerelationpatches/` | `*.sh` | Before relation creation |
| Post-patches | `postpatches/` | `*.sh` | After backend creation |

## Tested example

Run `./scripts/test-grapi-injections.sh` from the repository root. It creates a
temporary file for every type above, runs the patch task, checks that each entry is
base64 encoded, and verifies that the reset task removes every generated entry.
The test leaves the repository files unchanged.

`postpatches/migrate-db.sh` is the shipped post-patch example. It runs `npm run migrate`
after the generated backend is available.

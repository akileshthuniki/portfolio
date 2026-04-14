# Dependencies Documentation

## Pinned Versions

Some dependencies are pinned to specific major versions to avoid breaking changes:

### lucide-react (v0.x)
- **Pinned to**: `^0.454.0`
- **Reason**: v1.x removed all brand icons (Github, Linkedin, Facebook, etc.)
- **Migration Path**: When ready to upgrade, migrate brand icons to:
  - [Simple Icons](https://simpleicons.org/)
  - [@icons-pack/react-simple-icons](https://www.npmjs.com/package/@icons-pack/react-simple-icons)
  - Or use official brand SVGs

### tailwindcss (v3.x)
- **Pinned to**: `^3.4.19`
- **Reason**: v4.x requires `@tailwindcss/postcss` plugin and has major architectural changes
- **Migration Path**: Follow [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide) when ready

## Security

All dependencies are regularly audited for security vulnerabilities using:
- `pnpm audit` locally
- GitHub Actions workflow (`.github/workflows/security-audit.yml`)
- Dependabot alerts

Last security audit: 2026-04-13
Status: ✅ No known vulnerabilities

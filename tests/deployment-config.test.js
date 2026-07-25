import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)

async function doesNotExist(path) {
  try {
    await access(new URL(path, root))
    return false
  } catch {
    return true
  }
}

test('only Cloudflare Pages deployment configuration remains', async () => {
  const pkg = JSON.parse(await readFile(new URL('package.json', root), 'utf8'))
  assert.equal(pkg.scripts.deploy, undefined)
  assert.equal(pkg.devDependencies['gh-pages'], undefined)
  assert.equal(await doesNotExist('.github/workflows/static.yml'), true)
  assert.equal(await doesNotExist('public/404.html'), true)
})

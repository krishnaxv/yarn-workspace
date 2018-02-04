// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

// Lerna utilities
import PackageUtilities from 'lerna/lib/PackageUtilities'
import Repository from 'lerna/lib/Repository'

const packageList = PackageUtilities.getPackages(new Repository(process.cwd()))

// packageList.map(package => ({
//   location: package._location,
//   package: package._package
// }))

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'dist/bundle.es.js',
      format: 'es',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'bundle',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ],
  external: ['react']
}

export default config

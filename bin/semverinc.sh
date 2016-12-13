
PROJECT_VERSION=$(node -p "require('semver').inc(require('./package.json').version, 'patch')")
npm version $PROJECT_VERSION

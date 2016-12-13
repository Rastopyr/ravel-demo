
PROJECT_DIR=$(git rev-parse --show-toplevel)
PROJECT_VERSION=$(node -p "require('./package.json').version")
PROJECT_NAME=$(node -p "require('./package.json').name")

docker build --tag "${PROJECT_NAME}:${PROJECT_VERSION}" \
             --file "${PROJECT_DIR}/Dockerfile" \
             $PROJECT_DIR

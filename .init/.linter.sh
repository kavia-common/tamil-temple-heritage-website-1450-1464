#!/bin/bash
cd /home/kavia/workspace/code-generation/tamil-temple-heritage-website-1450-1464/frontend_vite
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
 if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi


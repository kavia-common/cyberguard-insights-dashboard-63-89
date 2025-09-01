#!/bin/bash
cd /home/kavia/workspace/code-generation/cyberguard-insights-dashboard-63-89/dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


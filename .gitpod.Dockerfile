# Use the Dockerfile for the Node.js project
FROM .gitpod/workspace-full:latest

# Copy the Dockerfile and .gitpod.yml to the workspace
COPY Dockerfile .gitpod.yml ./

# Expose port 5173
EXPOSE 5173

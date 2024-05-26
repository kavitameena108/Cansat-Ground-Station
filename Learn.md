# CanSat Ground Station

## Introduction

Welcome to the CanSat Ground Station project! This project aims to develop a comprehensive ground station for monitoring and controlling a CanSat mission using modern web technologies. In this introduction, we'll provide an overview of the key technologies and tools used in this project.

## Technologies Used:

### React

React is a popular JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the state of our application efficiently. We're leveraging React to build the frontend interface of our ground station.

### Vite

Vite is a fast and minimalist development server and build tool for modern web projects. It provides lightning-fast cold server start and instant hot module replacement (HMR) during development. We're using Vite to build and bundle our React application for production.

### Redux

Redux is a predictable state container for JavaScript apps. It helps us manage the global state of our application and enables efficient data flow between components. We're using Redux for managing and transferring data within our ground station application.

### Three.js

Three.js is a popular JavaScript library used to create and display 3D graphics in the browser. We're utilizing Three.js to render and display the 3D model of the rocket within our ground station interface, providing users with a visual representation of the CanSat.

### Storybooks

Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular. It allows us to create and showcase interactive UI components independently from the application's business logic. We're using Storybook for unit testing our UI components, ensuring they function correctly and look as expected in various scenarios.

  #### Docker

Docker is a platform that enables developers to automate the deployment of applications inside lightweight, portable containers. We use Docker to ensure our application runs consistently across different environments. 

#### Docker-Compose

Docker Compose is a tool for defining and running multi-container Docker applications. We use Docker Compose to configure and run our development environment, ensuring all necessary services are started with a single command. 

#### DevContainer 

DevContainer is a feature of Visual Studio Code that allows developers to open projects inside containers, providing a consistent development environment. We use DevContainer to ensure all contributors work with the same dependencies and configurations.

## Getting Started

### 1. Install Node:

Before you can run the CanSat Ground Station project, you'll need to have Node.js installed on your system. Follow these steps to install Node.js:

- Windows and macOS:
  - Visit the official Node.js website.
  - Download the recommended version for your operating system.
  - Follow the installation instructions provided on the website.
- Linux:
  - You can install Node.js using a package manager like apt (Ubuntu/Debian) or yum (CentOS/RHEL). Here's an example using apt:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```
- Verify installation:
  - To verify that Node.js and npm (Node Package Manager) have been successfully installed, open a terminal or command prompt and run the following commands:
    ```bash
    node --version
    npm --version
    ```
  - These commands should display the installed versions of Node.js and npm, respectively.

### 2. Clone the Repository

Once you have Node.js installed, you can clone the CanSat Ground Station repository to your local machine. Follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/Gagan-Space/Cansat-Ground-Station.git
   ```
4. Once the repository is cloned, navigate into the project directory:
   ```bash
    cd cansat-ground-station
   ```
   Now you're ready to proceed with setting up and running the CanSat Ground Station project!

## Running test with Storykbook

Storybook provides a convenient way to develop and test UI components in isolation. Follow these steps to run tests using Storybook:

### 1. Install Dependencies

Before running Storybook, ensure that you have all the necessary dependencies installed. If you haven't already, install the project dependencies by running:

```bash
yarn install
```

### 2. Start Storybook

To start Storybook, run the following command in your terminal:

```bash
yarn run storybook
```

This command will start the Storybook development server, and you should see output indicating that Storybook is running.

### 3. Access Storybook UI

Once Storybook is running, you can access the Storybook UI by opening your web browser and navigating to `http://localhost:6006`. This is the default address where Storybook runs locally.

## Running the Development Server

Vite is a blazing-fast development server and build tool for web projects, including React applications. Follow these steps to run your React project using the Vite development server:

### 1. Install Dependencies

Navigate to your project directory using a terminal or command prompt, and install the necessary dependencies by running:

```bash
yarn install
```
This command will install all the required dependencies listed in your package.json file, including Vite.

### 2. Start the Development Server
Once the dependencies are installed, you can start the Vite development server by running the following command:

```bash
yarn run dev
```
This command will start the Vite development server, and you should see output indicating that the server is running. By default, Vite will serve your React application on `http://localhost:3000`.

## Using DevContainer and Docker Compose

### Setting Up the DevContainer

To ensure a consistent development environment, we use Visual Studio Code's DevContainer feature. Follow these steps to set up and use the DevContainer:

1. **Install Docker**:
    - Download and install Docker from the [official website](https://www.docker.com/get-started).

2. **Open Project in VS Code**:
    - Open the CanSat Ground Station project in Visual Studio Code.

3. **Reopen in Container**:
    - Press `F1` to open the command palette.
    - Type `Remote-Containers: Reopen in Container` and select it.
   - When you open the project in VS Code, you should see a popup stating that "This folder contains a .devcontainer configuration file" with an option to reopen the project in the DevContainer.

VS Code will then build and open the project inside a Docker container, providing a consistent development environment.

### Using Docker Compose

To run the project using Docker Compose, follow these steps:

1. **Install Docker Compose**:
    - Ensure you have Docker Compose installed. It's included with Docker Desktop.

2. **Build and Start Containers**:
    - In your terminal, navigate to the project directory.
    - Run the following command to build and start the containers:

    ```bash
    docker-compose up --build
    ```

3. **Access the Application**:
    - Once the containers are up and running, you can access the application at `http://localhost:5173/`.

# 🏃‍♂️ Getting Started
<div align="center">
    <a href="https://discord.gg/Wwhjfx6dJG"><img src="https://img.shields.io/discord/1013056365884878858?color=%235865F2&logo=discord&logoColor=%23FFFFFF&style=plastic" alt="Discord"></a>
    <a href="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml"><img src="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml/badge.svg" alt="Build"></a>
    <a href="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml"><img src="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml/badge.svg" alt="Documentation"></a>
    <img src="https://img.shields.io/github/v/release/Gagan-Space/Cansat-Ground-Station" alt="GitHub Release">
    <img src="https://img.shields.io/github/license/Gagan-Space/Cansat-Ground-Station" alt="GitHub License">
    <img src="https://img.shields.io/github/stars/Gagan-Space/Cansat-Ground-Station?style=flat" alt="GitHub Repo stars">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Gagan-Space/Cansat-Ground-Station?style=flat">
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/Gagan-Space/Cansat-Ground-Station">
    <a href="https://gitpod.io/#https://github.com/Gagan-Space/Cansat-Ground-Station"><img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?style=flat&logo=gitpod" alt="Gitpod"></a>
</div>

## 📊 Data Format
Telemetry data collected from the CanSat payload is transmitted to the ground station in a structured format.

- **Byte[0] Data Header, 0x0F**
- **Byte[1-47] Telemetry Data :**
  - packetCount (4 bytes)
  - mode (1 byte)
  - state (1 byte)
  - altitude (4 bytes)
  - temperature (4 bytes)
  - pressure (4 bytes)
  - voltage (4 bytes)
  - gpsTime (4 bytes)
  - gpsLatitude (4 bytes)
  - gpsLongitude (4 bytes)
  - gpsSats (1 byte)
  - tiltX (4 bytes)
  - tiltY (4 bytes)
  - rotZ (4 bytes)
- **Byte[48] Data Footer, 0x00**

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js, npm, and yarn installed on your local machine.
- Git installed on your local machine.

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/Gagan-Space/Cansat-Ground-Station.git
   ```

2. cd cansat-ground-station

   ```sh
   cd cansat-ground-station
   ```

3. Install dependencies:

   ```sh
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```sh
yarn run dev
```


### 🐳 Installation with Docker
To start project locally through docker, run:

1. After clonning the repository change directory to cansat-ground-station
   ```sh
   cd cansat-ground-station
   ```
2. Build Dockerfile:
   ```sh
   docker build -t gagan .    
   ```
3. Run the image:
   ```sh
   docker run -p 5173:5173 gagan
   ```
4. Server is started on this url ,if followed all steps correctly:
   ```sh
   http://localhost:5173/
   ```

## 🤝 Contributing
If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix:

   ```sh
   git checkout -b feature/my-feature
   ```

3. Make your changes and ensure they follow the project's coding style.
4. Commit your changes with descriptive commit messages:

   ```sh
   git commit -am "Add a new feature"
   ```

5. Push your branch to your fork:

   ```sh
   git push origin feature/my-feature
   ```

6. Finally, open a pull request on the original repository's main branch.

## 📝 License
This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.

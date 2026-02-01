# Mercator Inkoopadviezen Landing Page

Modern, responsive landing page for Mercator Inkoopadviezen, built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Custom Design System)
- **CI/CD**: GitHub Actions

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Qballjos/mercator.git
   cd mercator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 🤖 Automation

- **GitHub Actions (CI)**: Automated linting and building on every push and pull request.
- **Automated Deployment**: On every push to `main`, GitHub builds the project and uploads it to your server via **SFTP**.
- **Dependabot**: Weekly checks for dependency updates.

### Setting up Auto-Deployment (SFTP)

To make the auto-deployment work, you need to add the following **Secrets** to your GitHub repository (`Settings` > `Secrets and variables` > `Actions`):

1. `SFTP_SERVER`: The host address of your server (e.g., `sftp.jouwdomein.nl` or IP).
2. `SFTP_USERNAME`: Your SFTP username.
3. `SFTP_PASSWORD`: Your SFTP password.

*De bestanden worden standaard geüpload naar de `www/` map via poort 22.*

## 📄 License

© 2026 Mercator Inkoopadviezen. Alle rechten voorbehouden.

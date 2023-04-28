# BlockChange Front-End

The front-end repo for BlockChange - a distributed crowdfunding application for humanitarian causes. Built using Next.js and MUI and interfaces with Solidity smart contracts deployed to the Ethereum test net.

## Dependencies
- npm 8+
- Node.js 16+
- Ganache 7.7+
- Python 3.9+

## Getting Started

1. Clone the repo:
```bash
git clone https://github.com/finnformica/blockchange-frontend.git
```

2. Install the node modules:
```bash
npm install
```

3. Start a server to render the front-end app:
```bash
npm run dev
```

4. Start the Ganache server to create a local blockchain:
```bash
ganache
```

5. Import one of the Ganache private keys into Metamask for local testing

6. Clone the back-end smart contracts into repo:
```bash
git clone https://github.com/finnformica/blockchange-backend.git
```

7. Create virtual environment for python deployment script:
```bash
cd blockchange-backend

python -m venv venv
source venv/bin/activate
pip install requirements.txt
```

8. Deploy smart contracts to Ganache:
```bash
python compile-local.py
```

9. Navigate to `localhost:3000`

## Features

- Single Page Application using React
- Static site generation using Next.js
- Connect to Metamask
- Responsive design - mobile / laptop
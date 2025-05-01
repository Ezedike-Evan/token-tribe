# 🛡️ Web3 Token Insight App

A decentralized web application that combines seamless Web3 authentication, real-time on-chain token data, and security risk assessments — built on top of Civic, Solscan, and dd.xyz APIs.

## 🚀 Features

- **Web3 Authentication with Civic**  
  Enables secure, wallet-based login without traditional passwords.

- **On-chain Token Details via Solscan API**  
  Fetches live token data from the Solana blockchain including:
  - Token metadata
  - Transaction history
  - Holder information

- **Real-time Risk Assessment via dd.xyz**  
  Integrates dd.xyz API to show a token’s risk score and relevant security metrics, helping users avoid scams or malicious tokens.

## 🔧 Tech Stack

- **Frontend:** React / Next.js / TypeScript  
- **Authentication:** [Civic auth](https://www.civic.com/)  
- **Blockchain Data:** [Solscan API](https://public-api.solscan.io/)  
- **Security Risk Analysis:** [dd.xyz API](https://dd.xyz/)

## 🌐 Live Demo

👉 [Visit the app](https://solanatokentribe.vercel.app/)

## 🧠 How It Works

1. **User logs in** via Civic Auth.
2. They can **input or browse Solana token addresses**.
3. The app uses the **Solscan API** to fetch token metadata and activity.
4. The token’s **security risk profile** is fetched from dd.xyz.
5. All data is presented in a clean, readable UI.

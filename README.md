# Transactional Vault Core

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Node](https://img.shields.io/badge/node-v20%2B-green.svg) ![Status](https://img.shields.io/badge/status-Active_Development-orange.svg)

## 📖 The Philosophy
**A Transactional Vault is not a specific piece of software you download; it is a design pattern and an architectural philosophy.**

In modern backend engineering, a "Vault" is a specialized layer of your system designed to be the absolute **Single Source of Truth (SSOT)** for high-value data.
* If your Instagram profile bio fails to update, it’s a minor bug.
* If your bank account loses ₹500 during a transfer, it’s a legal and financial catastrophe.

The "Vault" is the architectural layer designed to prevent that catastrophe.



## 🚀 Project Scope & Roadmap

This repository is a comprehensive study of **Level 1 Backend Engineering**, divided into five core pillars. Each pillar addresses a specific type of "high-value" data integrity problem.

### 🏛️ Pillar 1: Booking & Reservation Vaults (Current Focus)
**Problem:** "The Inventory of Time & Space." Preventing two people from owning the same atomic resource.
**Key Protocol:** The Seat-Based Protocol (Cinema/Events).

* **Logic:** Fixed & Static Inventory (Seat A1 is always A1).
* **Mechanism:** Optimistic Concurrency Control (Versioning).
* **Challenge:** Handling high-concurrency spikes (e.g., 500 users hitting "Book" on the same seat simultaneously).



**Future Protocols in this Pillar:**
* **PNR Protocol (Airlines):** Overbooking logic & Global Distribution Systems.
* **Geospatial Matching (Uber):** Locking moving human resources.
* **Slot-Based (Doctors):** Locking time windows rather than physical IDs.

---

### 💰 Pillar 2: Digital Wallet & Ledger Systems (The FinTech Core)
**Problem:** Moving value without losing a single floating-point digit.

* **Core Concepts:** Double-Entry Bookkeeping (Every Debit has a Credit).
* **Tech Stack:** ACID Compliance, MongoDB Sessions, Transaction Rollbacks.
* **Goal:** Build a Personal Neo-Bank API where balance is calculated dynamically from transaction history.

---

### 📦 Pillar 3: Inventory & Resource Vaults (The Atomic Pillar)
**Problem:** High-volume physical or digital stock management (e.g., Flash Sales).

* **Core Concepts:** Atomic Operators (`$inc`, `$set`), Idempotency Keys.
* **Key Protocol:** The Flash Sale Protocol.
* **Tech Stack:** Redis + Lua Scripting to handle "Thundering Herd" problems where DB locking is too slow.



---

### ⚖️ Pillar 4: Escrow & Settlement Systems
**Problem:** Managing multi-party transactions where funds are "in-flight."

* **Core Concepts:** Finite State Machines (Pending $\rightarrow$ Funded $\rightarrow$ Released).
* **Goal:** Safe reversal logic for disputed transactions.

---

### 🔐 Pillar 5: Identity & Secret Vaults
**Problem:** Protecting PII (Personally Identifiable Information).

* **Core Concepts:** Field-Level Encryption & Audit Logging.
* **Goal:** A system where even database administrators cannot view sensitive user data in plain text.

---

## 🛠️ Technical Stack

* **Runtime:** Node.js (Express/NestJS)
* **Database:** MongoDB (Mongoose ODM)
* **Caching/Locking:** Redis (for Flash Sale protocols)
* **Testing:** Jest & Supertest (Integration Testing), Artillery.io (Load Testing)

## ⚡ Level 1 Skill Matrix Implementation
This project explicitly targets the mastery of:
* **Mathematical Accuracy:** Using `db.startSession()` for ACID transactions.
* **Race Conditions:** Handling `VersionError` in Mongoose.
* **Atomic Updates:** Using `$inc` instead of Fetch-Update-Save.
* **Data Privacy:** Implementing AES-256 encryption for specific fields.

## 🏁 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/transactional-vault-core.git](https://github.com/your-username/transactional-vault-core.git)
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Environment Setup**
    Create a `.env` file and add your MongoDB connection string.
    ```env
    DATABASE_URL=mongodb://localhost:27017/vault-core
    ```
4.  **Run Development Server**
    ```bash
    npm start
    ```

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

# 🚀 k6 API Load Testing Framework — Serverest

A **JavaScript-based API performance and load testing project using k6**, created to demonstrate how API performance can be validated under controlled load and integrated into a CI/CD pipeline.

The project uses the **ServeRest API application** as the system under test and provides a structured approach for:

* API load testing
* Performance validation
* Test data management
* Reusable test utilities
* Configurable environments
* HTML/JSON test reports
* Automated execution through GitHub Actions

**Application under test:** ServeRest

---

# 🎯 Project Objective

The primary objective of this project is to demonstrate how **performance testing can be incorporated into the software testing lifecycle** rather than treating it as a completely separate activity.

The framework allows us to:

1. Configure the target API environment.
2. Prepare reusable test data.
3. Execute API requests using k6.
4. Generate controlled load against the application.
5. Collect performance metrics.
6. Validate API behavior under load.
7. Generate test reports.
8. Execute performance tests automatically through CI/CD.

---

# 🏗️ High-Level Execution Flow

```text
                 ┌───────────────────────┐
                 │    Developer / CI     │
                 │   Trigger Test Run    │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │    k6 Configuration   │
                 │   Load Test Settings  │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │     Test Data         │
                 │    data/*.js          │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   k6 Load Test        │
                 │   tests/*.js          │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │     ServeRest API     │
                 │    System Under Test  │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   k6 Metrics & Checks │
                 │ Response Time         │
                 │ Error Rate            │
                 │ Throughput            │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   JSON / HTML Report  │
                 │       reports/        │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │    GitHub Actions     │
                 │   Artifacts / Pages  │
                 └───────────────────────┘
```

---

# 🛠️ Technology Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| k6             | API load & performance testing |
| JavaScript     | Test scripting                 |
| Node.js        | Project/runtime tooling        |
| npm            | Dependency & script management |
| Git            | Version control                |
| GitHub Actions | CI/CD automation               |
| GitHub Pages   | Test result publishing         |
| ServeRest      | API system under test          |

---

# ✨ Key Features

## 1. API Load Testing

The project uses **k6** to generate virtual-user traffic against the ServeRest APIs.

The load test can be used to evaluate API behavior under controlled traffic and identify performance degradation as load increases.

---

## 2. Configurable Test Environment

Application-specific settings are maintained separately in the configuration layer.

Example:

```text
config/
└── config.js
```

This keeps environment configuration separate from the actual test implementation.

For example:

```javascript
baseURL
```

can be maintained centrally instead of being hardcoded across multiple test files.

---

## 3. Reusable Test Data

Test data is maintained separately from test scripts.

```text
data/
└── *.js
```

This provides a cleaner separation between:

```text
Test Logic
     +
Test Data
```

and makes the load-test scripts easier to maintain.

---

## 4. Reusable Helpers

Common functions are maintained under:

```text
support/
└── helpers.js
```

Reusable utilities reduce duplication across performance test scenarios and make the test implementation easier to extend.

---

## 5. Performance Metrics

k6 collects important performance indicators during execution.

Typical metrics used for performance analysis include:

* Request duration
* Response time
* Request rate
* Error rate
* Checks/pass rate
* Virtual users
* HTTP request statistics

These metrics help identify whether the API remains stable and responsive under load.

---

# 📊 Performance Testing Flow

The load test follows a structured execution model:

```text
Initialize Test
      ↓
Load Configuration
      ↓
Load Test Data
      ↓
Create Virtual Users
      ↓
Execute API Requests
      ↓
Validate Responses
      ↓
Collect k6 Metrics
      ↓
Evaluate Performance Thresholds
      ↓
Generate Reports
```

This approach provides visibility into both **functional correctness and API performance characteristics**.

---

# 📋 Prerequisites

Before running the project, install the following:

### Git

Verify:

```bash
git --version
```

### Node.js

Verify:

```bash
node --version
```

### npm

Verify:

```bash
npm --version
```

### k6

Install k6 by following the official installation guide:

[k6 Installation Guide](https://k6.io/docs/get-started/installation/?utm_source=chatgpt.com)

Verify the installation:

```bash
k6 version
```

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Samska/k6-serverest.git
```

Navigate to the project:

```bash
cd k6-serverest
```

---

## 2. Install npm Dependencies

```bash
npm install
```

This installs the Node.js dependencies required by the project.

---

# ▶️ Running the Tests

The project provides npm scripts to simplify execution.

## Start ServeRest

```bash
npm run start:server
```

This starts the ServeRest application used as the system under test.

---

## Execute Load Test

```bash
npm run test:load
```

This command:

```text
Clean Previous Reports
        ↓
Execute e2e-load-test.js
        ↓
Run k6 Load Test
        ↓
Collect Performance Metrics
        ↓
Generate JSON Report
        ↓
Generate HTML Report
        ↓
Store Results in reports/
```

---

# 📁 Project Structure

```text
k6-serverest/
│
├── .github/
│   └── workflows/
│       └── k6.yml
│           # GitHub Actions CI/CD configuration
│
├── config/
│   └── config.js
│       # Application and environment configuration
│
├── data/
│   └── *.js
│       # Test data used by performance tests
│
├── reports/
│   └── *
│       # Generated JSON and HTML reports
│
├── support/
│   └── helpers.js
│       # Reusable helper functions
│
├── tests/
│   └── *.js
│       # k6 performance/load test scripts
│
├── .gitignore
│   # Files excluded from version control
│
├── k6.config.js
│   # Main k6 configuration
│
├── package.json
│   # Project metadata and npm scripts
│
├── package-lock.json
│   # Locked dependency versions
│
└── README.md
    # Project documentation
```

---

# 🧪 Test Architecture

The framework separates responsibilities into different layers.

### Configuration Layer

```text
config/
```

Responsible for environment-specific settings such as the API base URL.

### Data Layer

```text
data/
```

Contains reusable data required by test scenarios.

### Test Layer

```text
tests/
```

Contains the actual k6 load/performance test scenarios.

### Support Layer

```text
support/
```

Contains reusable functions and utilities.

### Reporting Layer

```text
reports/
```

Contains generated execution results.

This separation makes the framework easier to maintain and extend as the number of performance scenarios grows.

---

# 📈 Reports

After execution, test results are generated under:

```text
reports/
```

The project generates results in formats such as:

```text
JSON
HTML
```

The reports provide visibility into the performance test execution and collected k6 metrics.

---

# 🔄 CI/CD Integration

The project is integrated with **GitHub Actions** for continuous performance-test execution.

Workflow configuration:

```text
.github/workflows/k6.yml
```

The pipeline is triggered when changes are pushed to the configured branch.

---

# 🚀 GitHub Actions Execution Flow

```text
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions Trigger
      │
      ▼
Checkout Repository
      │
      ▼
Install Dependencies
      │
      ▼
Start / Access Application
      │
      ▼
Execute k6 Load Tests
      │
      ▼
Collect Performance Results
      │
      ▼
Generate HTML / JSON Reports
      │
      ├───────────────┐
      ▼               ▼
GitHub Artifact    GitHub Pages
      │               │
      ▼               ▼
Download Result    View Report
```

---

# 📦 CI/CD Artifacts

Each CI execution generates test results that can be stored as GitHub Actions artifacts.

This allows the team to:

* Download test results
* Review previous executions
* Investigate failures
* Compare performance results
* Maintain execution evidence

---

# 🌐 GitHub Pages Reporting

The project also publishes the generated test summary through **GitHub Pages**, providing an easy way for the team to access the performance-test results without downloading artifacts.

---

# 🎯 What This Project Demonstrates

This project demonstrates practical knowledge of **API performance and load testing using k6**, including:

### Performance Testing

Ability to create and execute API load tests against a real application.

### JavaScript-Based Test Automation

Writing maintainable performance-test scripts using JavaScript.

### Test Data Management

Separating test data from test execution logic.

### Framework Design

Organizing configuration, tests, utilities, data, and reports into separate layers.

### Performance Metrics

Understanding and analyzing API response times, request behavior, error rates, and virtual-user activity.

### CI/CD

Integrating performance testing into GitHub Actions so tests can execute automatically as part of the development workflow.

### Test Reporting

Generating and publishing execution results for easy analysis by QA engineers, developers, and other stakeholders.

---

# 💡 Why Include Performance Testing in CI/CD?

Performance issues can be introduced even when functional tests are passing.

For example:

```text
Functional Tests
      ↓
      PASS ✅
      
But...

Response Time
      ↓
      Increased ⚠️

Error Rate
      ↓
      Increased ⚠️
```

Integrating k6 into CI/CD provides an additional quality gate and helps identify performance regressions earlier in the development lifecycle.

---

# 🔮 Future Enhancements

The framework can be extended with:

* Multiple load profiles
* Smoke performance tests
* Stress testing
* Spike testing
* Soak/endurance testing
* Performance thresholds
* Environment-specific configuration
* Docker-based execution
* Trend analysis
* Slack/Teams notifications
* Integration with Grafana
* Integration with InfluxDB
* Performance dashboards
* Scheduled nightly performance testing

---

# 👨‍💼 Interview Talking Points

If asked **"Tell me about this project"**, you can explain it like this:

> "I created a k6-based API performance testing framework using JavaScript. The objective was to validate how the ServeRest APIs behave under controlled load. I separated configuration, test data, reusable helpers, test scripts, and reporting into different layers to keep the framework maintainable. The tests collect important performance metrics such as response time, request behavior, error rate, and virtual-user activity. I also integrated the framework with GitHub Actions so performance tests can be executed automatically when changes are pushed. The execution results are generated as HTML and JSON reports, stored as CI artifacts, and published through GitHub Pages for easy access."

---

# 📌 End-to-End Summary

```text
                  k6 Performance Framework
                           │
                           ▼
                  Configuration Layer
                           │
                           ▼
                     Test Data
                           │
                           ▼
                    Load Test Script
                           │
                           ▼
                     Virtual Users
                           │
                           ▼
                    ServeRest APIs
                           │
                           ▼
                 Performance Metrics
                           │
                           ▼
                  Threshold Validation
                           │
                           ▼
                  JSON / HTML Reports
                           │
                           ▼
                  GitHub Actions CI/CD
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
             CI Artifacts      GitHub Pages
                  │                 │
                  └────────┬────────┘
                           ▼
                  Performance Feedback
```

## ⭐ Final Outcome

The project provides an end-to-end approach for **API performance testing, reporting, and CI/CD integration**, demonstrating how performance testing can be incorporated into a modern automation and DevOps workflow.

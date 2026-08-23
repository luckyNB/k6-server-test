[![K6 Tests](https://github.com/Samska/k6-serverest/actions/workflows/k6.yml/badge.svg)](https://github.com/Samska/k6-serverest/actions/workflows/k6.yml)
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

# K6 Serverest

This is a sample project using K6 API Load testing in the application https://serverest.dev.

## Pre-requisites

* Git
* Node
* K6 - https://k6.io/docs/get-started/installation/

## Install

Clone this repo

```bash
  git clone https://github.com/Samska/k6-serverest
```

Install the dependencies

```bash
  npm install
```

## Running the tests/scripts

`npm run start:server` - Start serverest server application

`npm run test:load` - Clean the reports folder, run the e2e-load-test.js and creates the json and html reports inside /reports

## Project structure

```
k6-serverest/          
 ├── .github/                               
 │    ├── workflows/                        
 │        ├── k6.yml                                # Configuration for the tests on CI           
 ├── config/                                                                
 │    ├── config.js                                 # Settings for the project such as baseURL
 ├── data/                                                                
 │    ├── *.js                                      # Data files used in the tests 
 ├── reports/                                       # Reports created after the test execution                        
 │    ├── *   
 ├── support/                                                                
 │    ├── helpers.js                                # Test helpers such as reusable functions                                                                 
 ├── tests/                                         # Tests folder                               
 │    ├── *.js                                      # Load tests                    
 ├── .gitignore                                     # Untracked folder and files
 ├── k6.config.js                                   # The main configuration file for k6
 ├── package-lock.json                              # File that is auto generated when a package is installed via npm      
 ├── package.json                                   # Core file in node.js projects, used for dependency management, scripts, project metadata and configs
 ├── README.md                                      # README with project overview and instructions
```

## Continuous integration

This project has continuous integration with GitHub Actions. The configuration file is located at the path .github/workflows/k6.yml. Every time a push is made to the main branch, the pipeline is executed. With each execution, an artifact is generated with the test results and saved in that execution, as well as the results are published on the gh-pages and are available for consultation on this [page](https://samska.github.io/k6-serverest/test-summary.html).# k6-server-test

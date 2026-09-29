# Contribution Guidelines

Welcome to contribute code to our project! The following guidelines are designed to assist you in submitting high-quality code smoothly.

## 1. Development Environment Setup

### 1.1 Install Dependencies

- Ensure that [Node.js](https://nodejs.org/en/) is installed on your machine. The recommended version is [Specific Version Number] or higher.
- Clone the project repository to your local machine:

```bash
git clone -b beta https://github.com/ZxyUI/ZxyUI.git
```

- Navigate to the project directory and install the dependencies:

```bash
cd ZxyUI
pnpm i
pnpm i -w
```

## 2. Branch Management

### 2.1 Main Branch

The `main` branch represents the stable version of the project and is used for official releases. Do not develop directly on the `main` branch.

### 2.2 Development Branch

The `beta` branch is the primary branch for daily development. All new feature development and bug fixes should be based on the `beta` branch.

## 3. Code Standards

### 3.1 Code Style

We adhere to [Specific Code Style Guidelines, e.g., ESLint + Prettier Configuration]. Before submitting your code, make sure it passes the code checks and formatting.

### 3.2 Comments

- Add comments to all functions, classes, and complex logic to enhance code readability.
- Use [Specific Comment Style, e.g., JSDoc]. For example:

```javascript
/**
 * Calculate the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the two numbers
 */
function add(a, b) {
	return a + b
}
```

## 4. Commit Standards

### 4.1 Commit Message Format

- Commit messages should follow [Specific Commit Message Guidelines, e.g., Conventional Commits]. The format is `<Type>[Optional Scope]: <Description>`.
- Types include: `feat` (new feature), `fix` (bug fix), `docs` (documentation update), `style` (code formatting adjustment), `refactor` (code refactoring), `test` (add or update test cases), etc.
- Example: `feat: Add user registration function`

### 4.2 Avoid Monolithic Commits

Try to break down features or fixes into multiple small, meaningful commits, with each commit focusing on a specific change.

## 5. Pull Request

### 5.1 Submit a Pull Request

- After completing feature development or bug fixes, push your feature branch to the remote repository and submit a Pull Request (PR) on GitHub.
- Select the `beta` branch as the target branch and provide a detailed PR description, explaining the purpose, content, and impact of the changes.

### 5.2 Code Review

- Team members will review your PR and may provide some modification suggestions. Please respond to the comments promptly and make changes according to the suggestions.
- A PR will only be merged into the `beta` branch after passing the code review and resolving all issues.

## 6. Testing

### 6.1 Unit Testing

For newly added features, corresponding unit tests must be written. Test cases should cover all possible inputs and boundary conditions to ensure the correctness and stability of the code.

### 6.2 Testing Framework

We use [vitest] for unit testing. The command to run the tests is:

```bash
pnpm test:ui
```

### 6.3 Test Coverage

Try to maintain a high test coverage rate, preferably above [Specific Coverage Value].

## 7. Communication and Collaboration

### 7.1 Issue Discussion

If you encounter problems or have questions during development, feel free to initiate a discussion in the project's [GitHub Discussions] or [Other Communication Channels, e.g., Slack Group].

### 7.2 Feature Planning

Before starting large-scale feature development, communicate with team members to ensure that the feature aligns with the overall project plan and architectural design.

## 8. Project Structure

```bash
├── docs  Documentation
├── packages
│   ├── zxy-ui-cli    Project scaffolding
│   ├── zxy-ui-dev    Project integration test environment
│   ├── zxy-ui-icons  Project icon library
│   ├── zxy-ui-shared Project shared toolkit
│   ├── zxy-ui-theme  Theme package
│   ├── zxy-ui-ui     Project component library
│   └── zxy-ui-resolvers On-demand component library
```

Thank you for contributing to this project! Let's work together to build an excellent project.

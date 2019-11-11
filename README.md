# Peach Finance: Code Assessment

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a simple one page application which uses emotion and context to build a faux "shopping" page.

This project was bootstrapped with Create React App. It has taken care not to eject it while still using Babel for the purpose of `emotion`, our CSS framework of choice. If you wish to review the CRA README, please refer to `./README-CRA.md`.

## Requirements

### Functional

- Componentize UI so that it is reusable
- Provide a way to theme the components
- Consider different sizes and how the components will be arranged at different breakpoints.
- Use mock data, a JSON or JS file is sufficient
- Provide a working search bar as a way to filter products

### Personal

- **Context** this being a small, test app feels like the perfect project to dabble with context. At the top level, can find a higher order component called `StoreProvider`. This provides our application with the required product data. Additionally the application is structured in a very redux-like way, can find references to `containers`, `store`, `reducers` and `dispatch` that all work in a nearly identical way.
- **Accessibility first.** I am passionate about creating inclusive experiences. This means being mindful of users with vision, motor, hearing and cognitive impairments. The components used will conform to WAI-ARIA as well as WCAG specifications. Throughout you will find semantic tags, use of aria attributes and a few minor changes to the design that would clash with WCAG 2.1 specifications.
- **Design System Driven.** I am a huge design system nerd. For me, there is nothing like seeing all of your building blocks in isolation, knowing that they will all work in unuson to compose complete, consistent and highly useable user interfaces.
  - The design system, `aui` (pronounced "ow-wee") will be isolated and treated as an independent package. For the sake of brevity, and keeping all related code together for review, it can be found in `src/aui` but really, it functions as it's own package. In a production/real-world scenario it could be consumed as a `node_module`, package within a monorepo or a git submodule (not recommended).
  - **The system is themable**, which means that different consumers can alter various compoent properties via the use of [design tokens](https://css-tricks.com/what-are-design-tokens/). The mechanism that powers this is [emotion-theming](https://emotion.sh/docs/theming) which harnesses the power of React's context API.

## Git Workflow

This project takes care to use standard gitflow workflow with minor exceptions.

### Branches

- `master` is our "final" production codebase, code in here is tagged with a semver and release notes. Merge rights here are restricted to certain team members (or in this instance, me alone, because its a technical exercise, not a real live production project, but humor me here...)
- `develop` is a working branch which contains the latest working code from different branches. _*A pull request is required to merge in to this branch*_
- `feature/${branch-name}` the feature prefix is reserved for **new feature work**
- `bugfix/${branch-name}` the bugfix prefix is reserved for **existing features that have bugfixes**

Additionally, `refactor` and `hotfix` branches may be necessary in certain instances. Use at your discression.

### tl;dr;

```
  |-<--Pull Request--<-|
  |                    |
  | - develop -> -> feature/branch-name -->|---> Commit #1
                           ^               |---> Commit #2
                           |               |---> Commit #3
                           ^               |---> Commit #4
                           |<-<-Squash-<-<-|
```

## Thank you.

If you read this far, thank you. 🌟

# Interview Template

## Setup commands

```bash
# create project
npm create vite@latest . -- --template react-ts

# include dependencies
npm install uuid react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# install dependencies
npm install
```

## Running commands

```bash
npm run dev
```

## Mock Data

```text
{
  organizations: [
    { id: uuidv4(), name: "Interos", email: "support@interos.ai", url: "https://www.interos.ai" },
    { id: uuidv4(), name: "Apple", email: "support@apple.com", url: "https://www.apple.com" },
    { id: uuidv4(), name: "Amazon", email: "support@amazon.com", url: "https://www.amazon.com" },
    { id: uuidv4(), name: "Google", email: "support@google.com", url: "https://www.google.com" },
    { id: uuidv4(), name: "Microsoft", email: "support@microsoft.com", url: "https://www.microsoft.com" },
  ],
}
```

## Layout

```ascii
 ┌──────────────────────────────────────┬─────────────────────┐ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │            List of                   │Organization         │ 
 │            Organizations             │Form (Create or Edit)│ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 │                                      │                     │ 
 └──────────────────────────────────────┴─────────────────────┘ 
```

- Home Page
    - Organization List Component
    - Organization Form Component

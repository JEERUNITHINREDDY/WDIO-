{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "types": ["node"],
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "strict": false,
    "skipLibCheck": true,
    "noImplicitAny": false
  },
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    },
    "transpileOnly": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}

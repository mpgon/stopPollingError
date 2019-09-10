## How to reproduce

```
yarn
yarn test
```

test should pass

change package.json from

```
"@apollo/react-testing": "3.0.1",
"@apollo/react-hooks": "3.0.1",
```

to

```
"@apollo/react-testing": "3.1.0",
"@apollo/react-hooks": "3.1.0",
```

```
yarn
yarn test
```

test should fail

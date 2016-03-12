SystemJS Node Binary Plugin
===

Used for loading Node binary files.

## Installing

### npm

```
  npm install systemjs-plugin-node-binary
```

Create a map configuration to the plugin:

```javascript
System.config({
  map: {
    'node-binary': 'node_modules/systemjs-plugin-node-binary/node-binary.js'
  }
})
```

### jspm

```
jspm install node-binary
```

## Usage

### With package config and an extension:

```javascript
System.config({
  packages: {
    app: {
      meta: {
        '*.node': {
          loader: 'node-binary'
        }
      }
    }
  }
})
```

### With direct meta configuration:

```javascript
System.config({
  meta: {
    'path/to/binary.node': {
      loader: 'node-binary'
    }
  }
});
```

## Builds

Builds are not supported - it will always be assumed that the binary load is a dynamic dependency and an exclude in any build.




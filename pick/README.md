## pick

Picks key-value pairs from an object
and creates new object out of it

**Usage**

```javascript
const o = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

pick(o, "prop1", "prop2"); // { [key]: number | undefined }
```

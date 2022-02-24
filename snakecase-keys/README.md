# snakeCaseKeys

Changes keys of plain object from `camel-case` to `snake-case`. Also, supports `array` of plain objects

```javascript
const data = {
  firstName: 'john',
  lastName: 'doe',
};

snakeCaseKeys(data); // { first_name: "john", last_name: "doe" }
```

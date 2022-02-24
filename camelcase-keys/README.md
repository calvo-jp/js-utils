# CamelCaseKeys

Changes keys of plain object from `snake-case` to `camel-case`. Also, supports `array` of plain objects

```javascript
const data = {
  first_name: 'john',
  last_name: 'doe',
};

camelCaseKeys(data); // { firstName: "john", lastName: "doe" }
```

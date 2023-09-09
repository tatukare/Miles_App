# API Testing

### Video Test

[Link video API test](https://youtu.be/3Ne6UaG66kI)

---

## Endpoints

### GET Users List

```bash
curl --location 'http://localhost:3000/api/users' \
--data ''
```

### POST Users

```bash
curl --location 'http://localhost:3000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nairo",
    "email": "nairoman@gmail.com"
}'
```

### PUT Users

```bash
curl --location --request PUT 'http://localhost:3000/api/users/4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nairo",
    "email": "nairoman@gmail.com"
}'
```

### DELETE Users

```bash
curl --location --request DELETE 'http://localhost:3000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nairo",
    "email": "nairoman@gmail.com"
}'
```

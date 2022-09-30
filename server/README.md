## Database

**Database provider:** Postgres

**DB IDE:** TablePlus

**Connection:**

```json
{
  "label": "local - monederodb",
  "host": "localhost",
  "user": "admin",
  "port": 5432,
  "ssl": false,
  "database": "monederodb",
  "password": "admin"
}
```

### Start postgres service

```bash
brew services start postgresql@14
```

### Stop postgres service

```bash
brew services stop postgresql@14
```

### Restart postgres service

```bash
brew services restart postgresql@14
```

# Day 25 (25 June)

## Objective
Perform log analysis using Git Bash commands to analyze user activities and database queries.

## File Used

- `dummy.log`

---

## Task 1: Count Logged-in Users

### Command

```bash
grep "User login successful" dummy.log | wc -l
```

### Output

```text
3
```

**Result:** 3 users logged in successfully.

---

## Task 2: Find Database Queries

### Command

```bash
grep -Ei "select|insert|update|delete|alter" dummy.log
```

### Output

```text
SELECT * FROM users WHERE id=101;
UPDATE users SET email='john@example.com' WHERE id=101;
INSERT INTO orders(id, amount) VALUES(1,500);
DELETE FROM users WHERE id=105;
ALTER TABLE users ADD COLUMN phone VARCHAR(15);
```

**Result:** The log contains SELECT, UPDATE, INSERT, DELETE, and ALTER SQL queries.

---

## Task 3: Show Only User Activity

### Command

```bash
grep "User" dummy.log
```

### Output

```text
[2025-06-26 10:00:01] INFO User login successful: john
[2025-06-26 10:01:10] INFO User login successful: alice
[2025-06-26 10:02:30] INFO User login successful: david
[2025-06-26 10:06:10] INFO User logout: john
[2025-06-26 10:06:40] INFO User logout: alice
```

---

## Task 4: Show User Activity with Line Numbers

### Command

```bash
grep -n "User" dummy.log
```

### Output

```text
1:[2025-06-26 10:00:01] INFO User login successful: john
3:[2025-06-26 10:01:10] INFO User login successful: alice
5:[2025-06-26 10:02:30] INFO User login successful: david
22:[2025-06-26 10:06:10] INFO User logout: john
24:[2025-06-26 10:06:40] INFO User logout: alice
```

## Conclusion

Successfully analyzed the dummy log file using Git Bash commands to:
- Count logged-in users.
- Identify SQL database queries.
- Filter user-related log entries.
- Display matching lines with line numbers.
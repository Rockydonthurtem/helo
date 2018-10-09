INSERT INTO user1
    (username, password)
VALUES
    ($1, $2)
RETURNING *;
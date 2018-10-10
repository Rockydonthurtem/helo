Select u.username, p.title , u.id, p.user_id
from post p
    inner join user1 u on p.user_id = u.id
Where p.user_id = $1;
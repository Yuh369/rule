let body = $response.body;
let obj = JSON.parse(body);
let ltr = JSON.parse(obj.data_body);
ltr.privileges.wordroot = {"expire_date":4102429976000,"user_type":2,"granted":1};
ltr.privileges.collins = {"expire_date":4102429976000,"collins_user_type":2,"granted":1};
obj.data_body = JSON.stringify(ltr);
$done({body: JSON.stringify(obj)});

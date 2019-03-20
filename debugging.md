## DEBUGGING

---

#### What steps would you take to troubleshoot/solve this error

Right away, I would google the first string of text that looks like a common error, in this case;

`System.Data.SqlClient.SqlException (0x80131904): Subquery returned more than 1 value. This is not permitted when the subquery follows =, !=, <, <= , >, >= or when the subquery is used as an expression.`

Even before that, it's clearly a SQL error, so I'll be looking for recent stackoverflow or github threads and read through several problems/hopefully solutions.

#### Where do you think the problem is located?

The stacktrace begins and ends with amazon part repository .select, and the specific partId: 706121S.

I would assume the SQL error originates with that specific part or list of parts.

#### Do you have any ideas what that problem may be?

I would guess there's a SQL query returning two almost identical rows, with one column not matching up correctly.

The first place I would look would be the SQL statement that is being used to select `partId: 706121S` from `Sunlight.Web.Amazon.Library.PartRepository`

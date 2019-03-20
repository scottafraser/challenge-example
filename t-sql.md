## T-SQL Challenge

---

#### Statements for @TempParts

1.  Select only the newest 4 parts.

`SELECT TOP(4) FROM @TempParts ORDER BY NewDate DESC;`

2.  Select only the cheapest 10 parts.

`SELECT TOP(10) FROM @TempParts ORDER BY Price ASC;`

3.  Select 5 parts randomly.

`SELECT TOP(5) FROM @TempParts ORDER BY NEWID();`

4.  Select all, plus add a “how expensive” identifier column.

`SELECT * FROM @TempParts ADD COLUMN HowExpensive varchar(20)`

`UPDATE @TempParts SET HowExpensive = $ WHERE @TempParts.Price <= 10`

`UPDATE @TempParts SET HowExpensive = $$ WHERE (@TempParts.Price > 10 AND @TempParts.Price <= 25);`

`UPDATE @TempParts SET HowExpensive = $$$ WHERE (@TempParts.Price > 25 AND @TempParts.Price <= 50);`

`UPDATE @TempParts SET HowExpensive = $$$$ WHERE (@TempParts.Price > 50 AND @TempParts.Price <= 100);`

`UPDATE @TempParts SET HowExpensive = $$$$$ WHERE @TempParts.Price < 100;`

#### Statements for @TempParts & @TempSaleParts

1.  Select all and return PartId, NewDate and lowest available price plus the “how expensive” identifier.

`SELECT * FROM @TempParts LEFT OUTER JOIN @TempSaleParts ON @TempParts.PartId = @TempSaleParts.PartId WHERE @TempParts.Price > @TempSaleParts.Price`

2.  Select only sale parts and return PartId, NewDate and lowest available price plus the “how expensive” identifier.

`SELECT @TempSaleParts.PartId, @TempSaleParts.NewDate, @TempSaleParts.Price, @TempParts.HowExpensive FROM @TempSaleParts RIGHT OUTER JOIN @TempParts ON @TempSaleParts.PartId = @TempParts.PartId;`

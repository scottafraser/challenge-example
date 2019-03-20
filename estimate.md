## Estimate

---

#### Requirements - Email

_- Add Email button to the bottom of the shopping cart page. Button should be standard grey button._

A very simple task, shouldn't take more than 15 min. CSS will take up most of that time.

_- The button should not display if their cart is empty._

Add class and logic with KO.js to toggle show/hide based on cart contents, shouldn't take longer than half an hour.

_- When the email button is clicked – it should open a modal window that accepts an email address, validates that it is valid and send the shopping cart contents as an email. Allow for multiple emails separated by a comma or semicolon. If the email address is invalid handle gracefully._

A modal is simple enough with Bootstrap and the email input can be validated with regex. I would build logic to toggle the class on the input field if the input doesn't match to warn and show a 'not valid email' message. Shouldn't take a lot longer than 2-3 hours.

_- You can leverage the existing email for the order confirmation but update it as needed to work for this purpose._

I could add a simple 'Use this email something@gmail.com?' checkbox in the modal sends it straight to the users email on file. 1-2 hours.

_- The email should also include the cart contents in an additional format for our Quick Order page. This is a simple list of items in the following format: {Qty}, {PartNumber}. The customer can easily copy this data from their email and paste it into another form on our site to quickly add all these items to their shopping cart._
`Example: 2,749315 3,749305 2,749300 10,700512`

The .NET logic creating the email will have render the cart content view, and also grab the quantity and part # columns from the cart table in the database and dynamically render them in the email contents.

This will be the bulk of the work, and I would give this feature one to two days to implement.

#### Requirements – Print

_- Add Email button to the bottom of the shopping cart page. Button should be standard grey button._

I would first ask if you didn't mean adding a Print button, either way, I can use most of the same button from before, no extra time.

_- The button should not display if their cart is empty._

Same logic as email button

_- Clicking the button should open up the cart contents and trigger the print dialog._

I can use the partial view of cart contents built out for the email to render the printable view, triggering the print dialog with .NET seems straightforward to implement, I would give this a full day to complete

### Summary

In total I see these two features taking a full week to implement, the bulk of the work will be creating the .NET class to handle sending the email and building the partial razor view for cart contents.

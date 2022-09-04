# book-record-management-10722

This is a book record management API Backend for the management of records and books

# Routs and Endpoints

## /users
POST: Create a new user 
GET: Get all list of users✅

## /users/{id} 
GET: Get a user by id ✅
PUT: Update a user by id
DELETE: Delete a user by id (check if he/she still has an issued book is there any fine to be paid.)

## /users/subscription-details/{id}
GET: Get user subscription details
1. Date of subscription
2. Valid till
3. Fine if any

## /books

GET: Get all books✅
POST: Create new book✅

## /books/{id}
GET: Get a book by id✅
POST: Update a book by id✅

## /books/issued/books
GET: Get all issued books

## /books/issued/withFine
GET: ALL issued books with fine

# Subscription Types

basic (3 months)
Standard(6 months)
Premium(12 months)

if subscription date is 01/08/22
and subscription type is Standard
the valid till date will be 01/02/

if he has an issued book and the issued book is to be returned at 01/01/23
and he misses it, the gets a fine of RS.100

If he has an issued book and the issued book is to be returned at 01/01/23

if  he missed the date of return;
and his subscription also plane he will get fine of rs. 200. /

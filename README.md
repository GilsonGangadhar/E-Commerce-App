Please watch the walkthrough-video before using the app (DEMO URL). And once logged in and used, again click on the your "login name" to log-out. 

E-Commerce-App walkthrough : https://www.awesomescreenshot.com/video/5565761?key=aa8c2746da222bc9888667ba433f4b34

E-commerce-App demo URL : https://e-retail-app-dflf916xk-gilsongangadhar-gmailcom.vercel.app/

This is an E-commerce App (Amazon clone) where the user can check-into the website through gmail authentication. User can send the desired products to the basket (wishlist) and purchase the product through card payment (stripe). After purchasing the product/products, user can review the order in the order page. 

its build using : 

* Front-end : next.js, redux toolkit, react-currency-formatter, react-responsive-caoursel(banners), stripe
* Styling is done using tailwind css ; icons used in the app got through "@heroicons/react"
* Backend : firebase,
* Database : firebase db
* currency formatted using react-currency-formatter package
* webhook backend page is created to store order's data into firebase db 
* Billing is done using stripe package

It's Main features : 

1. User authentication via Gmail using firebase authentication, methods in next-auth package
2. Products data obtained from FakeStoreApi("https://fakestoreapi.com/products") through axios package. 
3. Creating backend and database using firebase to store user's gmail data(name & email) and user's order data. 
4. Selecting products on the homepage and storing in the basket. In the basket, products can be again added and removed. 
5. In the checkoutpage(where the basket is present), user can purchasing the product by pressing "checkout". User is redirected to stripe billing, where user can type neccessary data to purchase the products. 
6. Once confirming the purchase, User is taken to success page to show the 'status' of the purchase.
7. And then user can see the orders in the orders page. 
8. Also made the app responsive for smartphones & tablets

## mercahomeAPI

> API para un eCommerce estilo 'Mercadona' usando NodeJS / Express / MySql / Sequelize.

> Es la parte backend del proyecto MERCAHOME y trabaja junto con el frontend [Mercahome-Front](https://github.com/AlbertoGarel/Mercahome-Front) 

```
```
---
## <span style="color: #f58060">API documentation.</span>


# Products

## <span style="color: lightGreen"> GET</span> - /products

Get a list of all products. (supports id, name, category filtering)

http://localhost:3000/products  
http://localhost:3000/products/?id=475557  
http://localhost:3000/products/&name=Heineken  
http://localhost:3000/products/&category=bodega


## <span style="color: lightGreen"> GET</span> - /products/promo

Get a list of the current promo products. (supports name, category filtering)

http://localhost:3000/products/promo  
http://localhost:3000/products/promo/&name=Heineken  
http://localhost:3000/products/promo/&category=bodega

---

### **products responses / json:**
```
200 - [
        {
          "id": 1,
          "name": "Agua mineral Bronchales grande",
          "volume": "/pack",
          "price": 2.52,
          "ud": "6 botellas",
          "image": "https://prod-mercadona.imgix.net/20191203....",
          "stock": 100,
          "fk_category": 1,
          "promo": 1,
          "createdAt": null,
          "updatedAt": null,
          "category": "agua"
        }
      ]

404 - { message: 'The resource you requested could not be found' }  

500 - { message: `products error` }

```
## <span style="color: lightGreen"> GET</span> - /products/top

Get the top sellers products.

http://localhost:3000/products/top  

---
### **top products responses / json:**
```
200 - [
    {
        "fk_product_id": 446,
        "qty_total": 6,
        "price_total": 1.46,
        "Product": {
            "id": 446,
            "name": "Maquillaje fluido Deliplus natural radiante 03",
            "volume": "/ud.",
            "price": 5.5,
            "ud": "30 ml",
            "image": "https://prod-mercadona.imgix.net/20191203....",
            "stock": 100,
            "fk_category": 19,
            "promo": false,
            "createdAt": null,
            "updatedAt": null
        }
    },
    {
        "fk_product_id": 445,
        "qty_total": 5,
        "price_total": 1.45,
        "Product": {
            "id": 445,
            "name": "Maquillaje fluido Deliplus natural radiante 02",
            "volume": "/ud.",
            "price": 5.5,
            "ud": "30 ml",
            "image": "https://prod-mercadona.imgix.net/20191203....",
            "stock": 100,
            "fk_category": 19,
            "promo": false,
            "createdAt": null,
            "updatedAt": null
        }
    },
    ...
  ]

404 - { message: 'The resource you requested could not be found' }  

500 - { message: `top products error` }


```
## <span style="color: yellow"> POST</span> - /products/add

Register a new product. 

http://localhost:3000/product/add

### **body:**
```
{
	"image": "https://prod-mercadona.imgix.net/20191203...",
    "name": "Nuevo Producto",
    "ud": "6 botellas x 2 L",
    "price": 1.11,
    "volume": "/pack",
    "fk_category": 1	
} 
```
### **responses / json:**
```
200 - { message: '<product> has been successfully registered' }

401 - { message: `product <product>, already exists..` }

404 - { message: 'The resource you requested could not be found' }  

500 - { message: `save product error` }


```
## <span style="color: orange"> DELETE</span> - /products/remove

Remove a product. 

http://localhost:3000/products/remove/?id=576

### **responses / json:**
```
200 - { message: '<product> has been successfully removed' }

404 - { message: 'The resource you requested could not be found' }  

500 - { message: `remove product error` }

```
## <span style="color: yellow"> PATCH</span> - /products/update

Update a product. 

http://localhost:3000/product/update

### **body:**
```
{
	"id": 575,
	"image": "https://prod-mercadona.imgix.net/20191203....",
    "name": "Nuevo Producto  6",
    "ud": "6 botellas x 2 L",
    "price": 0.02,
    "volume": "/pack",
    "fk_category": 1
} 

```

# Users

## <span style="color: yellow"> POST</span> - /users/register

Register a new user. 

http://localhost:3000/users/register

### **body:**
```
{  
	"user_name":"nick4",
	"email": "nick4@gmail.com",
	"password": "12345678%Aa",
	"address": "avenida nick4, num: 4",
	"fk_city": 6
}  
```
### **responses / json:**
```
200 - { 
    message: '<userName> has been successfully registered',
    "user": {
        "role": "cli",
        "id": 7,
        "user_name": "nick5",
        "email": "nick5@gmail.com",
        "password": "$2a$10$6/Nllb12v/5nYylhA2RhV.....",
        "address": "avenida nick5, num: 5",
        "fk_city": 7,
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJ........",
        "updatedAt": "2020-01-05T17:43:13.821Z",
        "createdAt": "2020-01-05T17:43:13.821Z"
    }  
   }

400 - { message: `password no valid` }

404 - { message: 'The resource you requested could not be found' }  

500 - { message: `register user error` }

```

## <span style="color: yellow"> POST</span> - /users/login

User Login. return user profile with new valid token.

http://localhost:3000/users/login

### **body:**
```
{  
	"email": "nick4@gmail.com",
	"password": "12345678%Aa"  
}  

```

### **responses / json:**
```
200 - {
        "id": 7,
        "user_name": "nick5",
        "email": "nick5@gmail.com",
        "address": "avenida nick5, num: 5",
        "role": "cli",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJz...",
        "fk_city": 7
      }

404 - { message: 'The resource you requested could not be found' }      

500 - { message: `login error` }

```

## <span style="color: orange"> PATCH</span> - /user/logout

User Logout, remove user token.

http://localhost:3000/user/logout

### **header:**
```
{
  Authorization: 'Bearer 8ce2d780-d76a-4091-bf20-296876f4fab3....'
}
```

### **responses / json:**
```
200 - { "message": "valid logout" }

400 - { message: "invalid token" }

404 - { message: 'The resource you requested could not be found' }

500 - { message: `logout error` }


```
# Orders
## <span style="color: yellow"> POST</span> - /orders/add

add user order.

http://localhost:3000/orders/add

### **header:**
```
  {
    Authorization: "Bearer 7132c508-8c6e-4d1f-8362-b6f1b9666899...."
  }
```

### **body:**
```
{
	"email": "nick1@gmail.com",
	"products":[
		{
			"fk_user_id": 6,
    		"fk_product_id": 111,
    		"current_price": 1.11,
    		"qty": 1
		},
		{
			"fk_user_id": 6,
    		"fk_product_id": 222,
    		"current_price": 1.22,
    		"qty": 2
		},
    ...
  ]
}
```
### **responses / json:**
```
200 - { "message": "order added" }

400 - { message: "invalid token" }

404 - { message: 'The resource you requested could not be found' }

500 - { message: `order error` }

```

# Orders
## <span style="color: yellow"> POST</span> - /orders/?user=

return all orders by user

http://localhost:3000/orders/?user=6

### **header:**
```
  {
    Authorization: "Bearer 7132c508-8c6e-4d1f-8362-b6f1b9666899...."
  }
```

### **body:**
```
{
	"email":"nick1@gmail.com"
}
```
### **responses / json:**
```
200 - {
  "ordersList": [
      {
          "createdAt": "2020-01-04T11:51:46.000Z",
          "rows": 6,
          "total": 8.01,
          "products": [
              {
                  "qty": 1,
                  "current_price": 1.11,
                  "Product": {
                      "id": 111,
                      "name": "Cerveza Amstel",
                      "volume": "/pack",
                      "price": 9.72,
                      "ud": "18 latas x",
                      "image": "https://prod-mercadona.imgix.net/20191203....",
                      "stock": 100,
                      "fk_category": 6,
                      "promo": false,
                      "createdAt": null,
                      "updatedAt": null
                  }
              },
              {
                  "qty": 2,
                  "current_price": 1.22,
                  "Product": {
                      "id": 222,
                      "name": "Lomos de atún aleta amarilla Escuris ultracongelados",
                      "volume": "/ud.",
                      "price": 2.68,
                      "ud": "Paquete 30",
                      "image": "https://prod-mercadona.imgix.net/20191203....",
                      "stock": 100,
                      "fk_category": 11,
                      "promo": false,
                      "createdAt": null,
                      "updatedAt": null
                  }
              },
              ...
            ]
        }
    ]
}

400 - { message: "invalid token" }

404 - { message: 'The resource you requested could not be found' }

500 - { message: `order error` }


```

# Categories
## <span style="color: lightGreen"> GET</span> - /categories

Get a list of categories (supports id, name filtering)

http://localhost:3000/categories
http://localhost:3000/categories/?id=6
http://localhost:3000/categories/?category=bodega

### **responses / json:**
```
200 - [
        {
        "id": 1,
        "category": "agua"
        },
        {
          "id": 2,
          "category": "aperitivos"
        },
        ...
      ]

404 - { message: 'The resource you requested could not be found' }

500 - { message: `categories error` }


```

# Cities
## <span style="color: lightGreen"> GET</span> - /movies/cities

Get a list of cities (supports id, name filtering)

http://localhost:3000/cities  
http://localhost:3000/cities/?id=6  
http://localhost:3000/cities/&name=Barcelona  

### **responses / json:**
```
200 - [
        {
          "id": 1,
          "name": "ALAVA"
        },
        {
          "id": 2,
          "name": "ALBACETE"
        },
        ...
      ]

404 - { message: 'The resource you requested could not be found' }

500 - { message: `cities error` }


```

## <span style="color: lightGreen"> GET</span> - /movies/cities/top

Get a list of cities with more sales.

http://localhost:3000/cities/top  

### **responses / json:**
```
200 - [
        {
          "city": "VALENCIA",
          "qty_total": 2100,
          "price_total": 8125.01
        },
        {
          "city": "BARCELONA",
          "qty_total": 1974,
          "price_total": 7365.15
        },        
        ...
      ]

404 - { message: 'The resource you requested could not be found' }

500 - { message: `cities error` }

```

let jsonStr = `{
    "name" : "Product 1" ,
    "price" : 500,
    "images" : ["p1_1.jpg", "p1_2.jpg", "p1_3.jpg"] ,
    "description" : "Lorem Ipsum ... "
}`
let obj = JSON.parse(jsonStr)
console.log(obj)
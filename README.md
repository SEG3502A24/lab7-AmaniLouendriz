[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7E3IZ1KI)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16899159&assignment_repo_type=AssignmentRepo)
# Student Name:
Amani Louendriz
# Student Number:
300 218 319
# Steps to run:
1- To initialize the database image, run: 

docker run -d -p 6033:3306 --name=docker-mysql --env="MYSQL_ROOT_PASSWORD=root" --env="MYSQL_PASSWORD=root" --env="MYSQL_DATABASE=booksDb" mysql

2- Populate the database with data using post requests:

Using tools like Postman, populate data for authors, books and bios, as follows:

## create authors:

post operations, to the "http://localhost:8080/books-api/authors" endpoint

{
    "firstName":"Tara",
    "lastName":"Westover"
}

{
    "firstName":"J.K",
    "lastName":"Rowling"
}

{
    "firstName":"Christi",
    "lastName":"Daugherty"
}

{
    "firstName":"Michelle",
    "lastName":"Frances"
}

{
    "firstName":"Jane",
    "lastName":"Casey"
}

{
    "firstName":"Jeffrey",
    "lastName":"Archer"
}

{
    "firstName":"Paul",
    "lastName":"Leclair"
}

## link authors to books

post operation, to the http://localhost:8080/books-api/authors/1/books  endpoint:

{
    "title":"Educated",
    "category":"Kids",
    "isbn":"0XY5H23H",
    "cost":"30",
    "year":"2018",
    "description":"Inspirational"
}

post operation, to the http://localhost:8080/books-api/authors/2/books  endpoint:

{
    "title":"Harry Potter",
    "category":"Kids",
    "isbn":"0XY5H23K",
    "cost":"50",
    "year":"2000",
    "description":"Amazing"
}

post operation, to the http://localhost:8080/books-api/authors/3/books endpoint:

{
    "title":"Night School",
    "category":"Kids",
    "isbn":"0XY58hgdH23K",
    "cost":"50",
    "year":"2014",
    "description":"Gripping"
}

post operation, to the http://localhost:8080/books-api/authors/4/books endpoint:

{
    "title":"The Daughter",
    "category":"Kids",
    "isbn":"0XY88hJdH23K",
    "cost":"50",
    "year":"2017",
    "description":"Best seller"
}

post operation, to the http://localhost:8080/books-api/authors/5/books endpoint:

{
    "title":"The Killing Kind",
    "category":"Kids",
    "isbn":"0XY88HhJdH23K",
    "cost":"50",
    "year":"2017",
    "description":"Best seller"
}

post operation, to the http://localhost:8080/books-api/authors/6/books endpoint:

{
    "title":"Over My Dead Body",
    "category":"Kids",
    "isbn":"0XY88Hh76GT",
    "cost":"50",
    "year":"2017",
    "description":"Best seller. Suspense"
}

post operation, to the http://localhost:8080/books-api/authors/3/books endpoint:

{
    "title":"Alias Emma",
    "category":"Kids",
    "isbn":"0XY888h76GT",
    "cost":"50",
    "year":"2017",
    "description":"Best seller. Suspense"
}

post operation, to the http://localhost:8080/books-api/authors/4/books endpoint:

{
    "title":"Sisters",
    "category":"Kids",
    "isbn":"6BDHGG32q",
    "cost":"50",
    "year":"2017",
    "description":"unstoppable"
}

## add bios to authors

put operation, to the http://localhost:8080/books-api/bios/1 endpoint:

{
    "biodata":"Tara is an American memoirist"
}

put operation, to the http://localhost:8080/books-api/bios/2 endpoint:

{
    "biodata":"J.K Rowling is a british author and philantropist"
}

put operation, to the http://localhost:8080/books-api/bios/3 endpoint:

{
    "biodata":"C.J Daugherty is a british novelist"
}


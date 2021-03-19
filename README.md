TEST WORK (paktolus)

Simple Server, which uses google-oath20 and jwt

Endpoints

1. Main page (Show Hello from NestJS)
    ```
    GET http://localhost:3000
    ```

2. Register using google. Return email, name, jwt-token
    ```
    GET http://localhost:3000/google
    ```

2. Show user info by token. 
   Return email, name, jwt-token
    ```
    GET http://localhost:3000/google
    ```
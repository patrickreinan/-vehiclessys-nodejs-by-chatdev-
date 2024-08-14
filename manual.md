# ChatDev Vehicle API

The ChatDev Vehicle API is a NodeJS application that allows you to insert, update, retrieve, and delete vehicles. Each vehicle has the following fields: name (string), brand (string), year (integer), and id (uuid).

## Installation

To install and run the ChatDev Vehicle API, follow these steps:

1. Make sure you have NodeJS installed on your machine. You can download it from the official NodeJS website: [https://nodejs.org](https://nodejs.org)

2. Clone the repository or download the code files from [GitHub](https://github.com/chatdev/vehicle-api).

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

   ```
   npm install
   ```

5. Once the dependencies are installed, you can start the API server by running the following command:

   ```
   node index.js
   ```

   The server will start running on port 3000, and you should see the message "Server is running on port 3000" in the console.

## API Endpoints

The ChatDev Vehicle API provides the following endpoints:

- `GET /vehicles`: Retrieves all vehicles.
- `GET /vehicles/:id`: Retrieves a specific vehicle by its id.
- `POST /vehicles`: Creates a new vehicle.
- `PUT /vehicles/:id`: Updates an existing vehicle.
- `DELETE /vehicles/:id`: Deletes a vehicle.

### GET /vehicles

Retrieves all vehicles.

Example Request:

```
GET /vehicles
```

Example Response:

```json
[
  {
    "id": "1a2b3c4d",
    "name": "Car",
    "brand": "Toyota",
    "year": 2020
  },
  {
    "id": "5e6f7g8h",
    "name": "Motorcycle",
    "brand": "Honda",
    "year": 2018
  }
]
```

### GET /vehicles/:id

Retrieves a specific vehicle by its id.

Example Request:

```
GET /vehicles/1a2b3c4d
```

Example Response:

```json
{
  "id": "1a2b3c4d",
  "name": "Car",
  "brand": "Toyota",
  "year": 2020
}
```

### POST /vehicles

Creates a new vehicle.

Example Request:

```
POST /vehicles
Content-Type: application/json

{
  "name": "Truck",
  "brand": "Ford",
  "year": 2019
}
```

Example Response:

```json
{
  "id": "9i8u7y6t",
  "name": "Truck",
  "brand": "Ford",
  "year": 2019
}
```

### PUT /vehicles/:id

Updates an existing vehicle.

Example Request:

```
PUT /vehicles/9i8u7y6t
Content-Type: application/json

{
  "name": "Truck",
  "brand": "Chevrolet",
  "year": 2021
}
```

Example Response:

```json
{
  "id": "9i8u7y6t",
  "name": "Truck",
  "brand": "Chevrolet",
  "year": 2021
}
```

### DELETE /vehicles/:id

Deletes a vehicle.

Example Request:

```
DELETE /vehicles/9i8u7y6t
```

Example Response:

```json
{
  "id": "9i8u7y6t",
  "name": "Truck",
  "brand": "Chevrolet",
  "year": 2021
}
```

## Error Handling

The API handles various error scenarios and returns appropriate error responses. Here are some examples:

- Invalid vehicle id:

  ```
  GET /vehicles/123
  ```

  Response:

  ```json
  {
    "error": "Invalid vehicle id"
  }
  ```

- Vehicle not found:

  ```
  GET /vehicles/9i8u7y6t
  ```

  Response:

  ```json
  {
    "error": "Vehicle not found"
  }
  ```

- Missing required fields:

  ```
  POST /vehicles
  Content-Type: application/json

  {
    "name": "Car",
    "brand": "Toyota"
  }
  ```

  Response:

  ```json
  {
    "error": "Missing required fields"
  }
  ```

- Invalid year:

  ```
  POST /vehicles
  Content-Type: application/json

  {
    "name": "Car",
    "brand": "Toyota",
    "year": "2020"
  }
  ```

  Response:

  ```json
  {
    "error": "Invalid year"
  }
  ```

## Conclusion

The ChatDev Vehicle API provides a simple and easy-to-use interface for managing vehicles. You can use the provided endpoints to insert, update, retrieve, and delete vehicles. If you have any questions or need further assistance, please don't hesitate to contact our support team. Happy coding!
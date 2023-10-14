## **Installation**

1. Clone the project repository:

    ```bash
    $ git clone https://github.com/rawalabhinav/mountain-guardian.git
    ```

2. Navigate to the project directory:

    ```bash
    $ cd Mountain-Guardian
    ```

3. Install frontend dependencies:

    ```bash
    $ cd frontend
    $ npm install
    ```

4. Install backend dependencies:

    ```bash
    $ cd ../backend
    $ ./mvnw clean install
    ```

5. Set up the machine learning environment:

6. Configure the project:

- Create a `.env` file in the root directory and add necessary environment variables (eg. your Google Maps API Key as `REACT_APP_MAP_API_KEY = ENTER_YOUR_KEY`)
- Update the backend application properties in `application.properties`.

7. Start the frontend and backend:

    ```bash
    # Start the frontend
    $ cd ../frontend
    $ npm start

    # Start the backend
    $ cd ../backend
    $ ./mvnw spring-boot:run
    ```
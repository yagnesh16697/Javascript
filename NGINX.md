# NGINX Fundamentals

### NGINX Vs Apache

- **Apache Default Configuration:**

  - Configured in pre-fork mode.
  - Spawns a set number of processors.
  - Each processor can handle a single request at a time.

- **Nginx Default Configuration:**

  - Deals with requests asynchronously.
  - A single Nginx process can serve multiple requests concurrently.
  - The number depends on available system resources for the Nginx process.

- **Asynchronous Design:**

  - Nginx handles requests asynchronously, allowing for better resource utilization.

- **Limitation of Nginx:**

  - Due to its asynchronous design, Nginx cannot embed server-side programming languages into its own processes.

- **Handling Dynamic Content:**

  - For dynamic content, Nginx relies on a separate process (e.g., PHP-FPM).
  - Reverse proxy is used to send dynamic content back to the client via Nginx.

- **Comparison:**
  - Apache's pre-fork model serves one request per processor at a time.
  - Nginx's asynchronous design enables concurrent handling of multiple requests by a single process.

These points provide an overview of the default configurations and design differences between Apache and Nginx as reverse proxy servers.

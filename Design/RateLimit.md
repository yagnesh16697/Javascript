# Designing a Rate Limiter

Implementing a rate limiter serves various purposes:

- **Phone Password (Security):** Enhances the security of phone passwords.
- **YouTube (20 Videos/24hr):** Manages costs and infrastructure availability by limiting video requests.

This system prevents both bots and users from overwhelming the server with excessive requests.

## Rate Limit for Backend API in Multiple Microservices

Employ a 429 status code to signify rate limiting. Client-side requests are restricted; alternative methods like CURL can be used.

### Non-Functional Requirements

- **Latency:** Aim for very low or nonexistent latency.
- **Throughput**
- **Storage**
- **Number of Users:** The system should cater to a large user base.

Calculations for storage:
128 Bytes (IP) \* 1 Billion Users = 132GB Data to store. Storing in memory is feasible.

- **Availability:** Target 99.999% uptime.

In case of failures:

- **Fail-Open:** Users can still access other resources, but bots/spammers might misuse resources.
- **Fail-Closed:** The entire user base cannot access any resource.

1. Store counts in a Key-Value store.

2. Implement a Sliding Window algorithm:

   - Unit time stamp (4 bytes)
   - Delete all previous records.

3. Token Bucket (External)
4. Sliding Window Counter (External)

## Database Schema

Use the following schema to manage rate limits:

- **IP/UserID:** Count
- **Expire Flag:** Automatically removed.

Each entry consists of:

- **ID:** String
- **API:** String
- **Operation:** String
- **Time:** Unix String
- **No. of Allowed Requests:** Integer

![Rate Limiter Schema](../img/rate_limit.svg)

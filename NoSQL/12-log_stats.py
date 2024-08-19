#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient


def log_stats():
    """
    Retrieve and display some stats about Nginx logs stored in MongoDB
    """
    # Establish a connection to the MongoDB server
    client = MongoClient("mongodb://127.0.0.1:27017")

    # Gain access to the 'logs' database and 'nginx' collection
    db = client.logs
    collection = db.nginx

    # Retrieve the total number of logs
    total_logs = collection.count_documents({})

    # Retrieve the counts for each HTTP method using dictionary comprehension
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {
        method: collection.count_documents({"method": method})
        for method in methods
    }

    # Retrieve the count of logs where method is 'GET' and path is '/status'
    status_check_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )

    # Display the results
    print(f"{total_logs} logs")
    print("Methods:")
    print("\n".join([f"\tmethod {method}: {method_counts[method]}" for method 
                     in methods]))
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()

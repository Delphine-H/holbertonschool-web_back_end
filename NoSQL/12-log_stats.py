#!/usr/bin/env python3
"""Provides stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient


def log_stats():
    """Function to print stats of Nginx logs in MongoDB"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    nginx_collection = db.nginx

    # Total number of logs
    log_count = nginx_collection.count_documents({})
    print(f"{log_count} logs")

    # Methods stats
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        method_count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # Number of logs with method=GET and path=/status
    status_check_count = nginx_collection.count_documents({"method": "GET",
                                                           "path": "/status"})
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()

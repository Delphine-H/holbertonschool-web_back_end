#!/usr/bin/env python3
"""NoSQL"""

from typing import List


def list_all(mongo_collection) -> List:
    """
    Lists all documents in a collection.

    Parameters:
    mongo_collection (pymongo.collection.Collection): The pymongo collection
    object.

    Returns:
    list: A list of documents in the collection. Returns an empty list
    if no documents are present.
    """
    return list(mongo_collection.find())

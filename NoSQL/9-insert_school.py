#!/usr/bin/env python3
""" NoSQL """


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into a collection.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
    The pymongo collection object.
    **kwargs: The document fields and values to be inserted.

    Returns:
    The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id

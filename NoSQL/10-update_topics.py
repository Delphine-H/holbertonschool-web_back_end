#!/usr/bin/env python3
""" NoSQL """


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
    The pymongo collection object.
    name (str): The school name to update.
    topics (list): The list of topics to set for the school.

    Returns:
    None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )

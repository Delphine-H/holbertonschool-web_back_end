#!/usr/bin/env python3
""" NoSQL """


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school documents having a specific topic.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
    The pymongo collection object.
    topic (str): The topic to search for in the 'topics' field.

    Returns:
    List: A list of documents that match the search criteria.
    """
    return list(mongo_collection.find({"topics": topic}))

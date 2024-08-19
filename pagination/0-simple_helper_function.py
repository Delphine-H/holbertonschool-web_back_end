#!/usr/bin/env python3
"""Pagination"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Calculate start and end index for a given pagination page and page size.

    Parameters:
    page (int): The page number (1-indexed).
    page_size (int): The number of items per page.

    Returns:
    tuple[int, int]: A tuple containing the start index and the end index.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index

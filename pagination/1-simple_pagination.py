#!/usr/bin/env python3
"""Pagination"""

import csv
from typing import List


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


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip the header row
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get a specific page from the dataset.

        Parameters:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

        Returns:
        List[List]: A list of rows from the dataset corresponding to
        the specified page.
        """
        # Assert that page and page_size are integers and greater than 0
        assert isinstance(page, int) and page > 0, "page must be a \
            positive integer"
        assert isinstance(page_size, int) and page_size > 0, "page_size must \
            be a positive integer"

        # Get the dataset
        dataset = self.dataset()

        # Get the start and end index using index_range function
        start_index, end_index = index_range(page, page_size)

        # Return the slice of the dataset or an empty list if out of range
        return dataset[start_index:end_index]\
            if start_index < len(dataset) else []

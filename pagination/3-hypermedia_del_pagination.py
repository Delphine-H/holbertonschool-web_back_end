#!/usr/bin/env python3
"""Pagination"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip the header row
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Get a specific page of data, with pagination metadata,
        handling item deletions.

        Parameters:
        index (int): The start index for the data (1-indexed).
        page_size (int): The number of items per page.

        Returns:
        dict: A dictionary with pagination metadata and the dataset page.
        """
        # Assert that index and page_size are valid
        assert isinstance(index, int) and index >= 0, "index must be a \
            non-negative integer"
        assert isinstance(page_size, int) and page_size > 0, "page_size must \
            be a positive integer"

        # Get the indexed dataset
        dataset = self.indexed_dataset()

        # Prepare the result dictionary
        result = {
            'index': index,
            'page_size': page_size,
            'data': [],
            'next_index': index + page_size
        }

        # Fetch the data for the current page
        page_data = []
        for i in range(index, index + page_size):
            if i in dataset:
                page_data.append(dataset[i])
            else:
                # If the index is out of the dataset range, break the loop
                break

        result['data'] = page_data

        # Return the result dictionary
        return result

#!/usr/bin/env python3
"""basic annotation"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """type-annotated function that takes a list of int and float
    and returns a float"""
    return sum(mxd_lst)

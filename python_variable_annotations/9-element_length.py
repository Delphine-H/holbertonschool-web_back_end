#!/usr/bin/env python3
"""basic annotation"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function that have parameters annotated"""
    return [(i, len(i)) for i in lst]

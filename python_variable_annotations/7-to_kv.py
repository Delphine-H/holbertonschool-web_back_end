#!/usr/bin/env python3
"""basic annotation"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """type-annoted function that takes a string k and an int or a float v
    and return a tuple"""
    return (k, float(v ** 2))

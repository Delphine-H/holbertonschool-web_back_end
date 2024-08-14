#!/usr/bin/env python3
"""basic annotation"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """type-annotated function that takes a float multiplier
    and returns a function that multiplies a float by multiplier."""
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function

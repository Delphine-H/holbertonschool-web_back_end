#!/usr/bin/env python3
"""Python - Async Comprehension"""

from typing import List

# Import async_generator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random numbers using async comprehension
    over async_generator"""
    return [number async for number in async_generator()]

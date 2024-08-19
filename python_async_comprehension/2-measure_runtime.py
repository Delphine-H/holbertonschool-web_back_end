#!/usr/bin/env python3
"""Python - Async Comprehension"""

import asyncio
import time

# Import async_comprehension using __import__
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measures the runtime of executing async_comprehension
     four times in parallel"""
    start_time = time.time()  # Record start time

    # Run async_comprehension four times in parallel
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.time()  # Record end time

    return end_time - start_time  # Return the total runtime

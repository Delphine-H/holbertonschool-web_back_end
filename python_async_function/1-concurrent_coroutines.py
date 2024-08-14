#!/usr/bin/env python3
"""This module runs a coroutine several times and
returns delays in ascending order."""

import asyncio
from typing import List

# Import wait_random from the module
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function that create tasks and return delays"""
    # Create a list of tasks
    tasks = []
    for time in range(n):
        tasks.append(wait_random(max_delay))

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays

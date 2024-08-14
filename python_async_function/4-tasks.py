#!/usr/bin/env python3
"""Python - Async"""

import asyncio
from typing import List

# Import task_wait_random from the previous module
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.
    Returns the list of all delays (in ascending order).
    """
    # Create a list of tasks
    tasks = []
    for time in range(n):
        tasks.append(task_wait_random(max_delay))

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays

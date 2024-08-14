#!/usr/bin/env python3

import asyncio
from typing import List

# Import wait_random from the module
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    # Create a list of tasks
    tasks = [wait_random(max_delay) for _ in range(n)]

    # Gather all tasks and get their results
    delays = await asyncio.gather(*tasks)

    # Sort delays without using sort() by using a sorting algorithm
    sorted_delays = []
    while delays:
        min_delay = min(delays)
        sorted_delays.append(min_delay)
        delays.remove(min_delay)

    return sorted_delays

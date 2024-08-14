#!/usr/bin/env python3

import asyncio
import time

# Import wait_n from the correct module
wait_n = __import__('concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the time taken by wait_n to execute n coroutines
    with a max_delay"""
    start_time = time.time()  # Record the start time

    # Run wait_n coroutine
    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()  # Record the end time

    total_time = end_time - start_time  # Calculate total execution time

    return total_time / n  # Return the average time per coroutine

#!/usr/bin/env python3
"""Python - Async"""

import asyncio

# Import wait_random from the previous module
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task for wait_random with the specified max_delay.
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task

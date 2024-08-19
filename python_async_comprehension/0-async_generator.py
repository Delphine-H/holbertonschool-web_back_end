#!/usr/bin/env python3
"""Python - Async Comprehension"""

import asyncio
import random


async def async_generator():
    """Coroutine that loop 10 times and each time asynchronously wait 1 second,
    then yield a random number"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

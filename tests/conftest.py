"""
pytest conftest — ensures the 'tests/' folder root is importable
and provides a shared fixture if needed in the future.
"""
import sys, os

# Make sure the tests directory is on the path
sys.path.insert(0, os.path.dirname(__file__))

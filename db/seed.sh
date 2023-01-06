#!/bin/bash

# Run SQLite3 and pass in the seed.sql script
sqlite3 code-notebook.db < schema.sql

echo "Seed script has been executed."
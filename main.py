# My Library Book Organiser

# The books on the class library shelf today.
books = ["Matilda", "The Jungle Book", "Charlotte's Web", "Holes"]

# Add, safely remove, and sort the books.
books.append("Wonder")
if "The Jungle Book" in books:
    books.remove("The Jungle Book")
books.sort()

print("Books:", len(books), books)
print("First:", books[0], "| Last:", books[-1])

# Shelf codes correspond to books in the same order.
shelves = ["C1", "H2", "M1", "W3"]
shelf_of = dict(zip(books, shelves))
print("Shelf map:", shelf_of)


def where_is(book):
    """Return the shelf code or a message if the book is not in the library."""
    return shelf_of.get(book, "Not in this library")


for title in ["Holes", "Dune"]:
    print(title, "->", where_is(title))

librarian = {"name": "Ms. Paula", "desk": "Front"}
librarian["desk"] = "Reading Room"
librarian["books_today"] = len(books)
print("Librarian:", librarian)

// Script that adds a new attribute to a document in the collection school
db.school.updateMany(
    { name: "Holberton school" },
    { $set: { address: "972 Mission street" } }
);

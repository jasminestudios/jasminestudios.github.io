# One Dictionary

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Creating new Dictionary](#creating-new-dictionary)


## Introduction
One Dictionary is offline dictionary. One Dictionary provides abbreviations dictionary for internet and messaging by default. And you can build your own .dictionary file and import to One Dictionary.

  ![Screen Shot](/Resources/one-dictionary.png)

## Creating new Dictionary
You can create your own dictionary from CSV file and import it to One Dictionary. This section explains a step-by-step guideline to create a new dictionary. Dictionary data file (.dictionary) is a simple SQLite database file. Please download the template file for Dictionary data.

### CSV Prepration

### Dictionary Generation Script
'''ruby
require 'CSV'
require 'sqlite3'
require 'fileutils'

# Copy file
FileUtils.cp("template.dictionary", "my_dic.dictionary")

# Open a database
db = SQLite3::Database.new "my_dic.dictionary"

firstRow = true

CSV.foreach("input.csv") do |row|
    if (firstRow == true)
        firstRow = false
        next
    end

    entry = row[0]
    keyword = row[1]
    definition = row[2]
    example = row[3]

    puts "entry: " + entry.to_s
    
    db.execute("INSERT INTO word (entry, name, definition, example) VALUES (?, ?, ?, ?)", entry, keyword, definition, example)
end

db.execute("UPDATE metadata SET value=(?) where name='name'", "My Dictionary")
db.execute("UPDATE metadata SET value=(?) where name='content_type'", "plain_text")
db.execute("UPDATE metadata SET value=(?) where name='entry_type'", "default")
'''

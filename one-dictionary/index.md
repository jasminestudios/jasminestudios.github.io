# One Dictionary

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Privacy Policy](#privacy-policy)
- [Creating new Dictionary](#creating-new-dictionary)


## Introduction
One Dictionary is offline dictionary. One Dictionary provides abbreviations dictionary for internet and messaging by default. And you can build your own .dictionary file and import to One Dictionary.

  ![Screen Shot](/Resources/one-dictionary.png)

## Downloads
The latest version of One Dictionary is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://apps.apple.com/us/app/one-dictionary/id1207632925)

## Privacy Policy
One Dictionary does NOT collect any of your data. The only data One Dictionary stores are your settings. These are only saved locally. No one, other than you, has access to this data.

## Creating new Dictionary
You can create your own dictionary from CSV file and import it to One Dictionary. Dictionary data file (.dictionary) is a simple SQLite database file. 

### Template Downloads
Please download the following files for Dictionary data.
* ![input.csv](build/input.csv) (sample CSV file to generate)
* template.dictionary (template dictionary data file)
* dict_gen.rb (ruby script to generate the dictionary data file)

### Run
Put 3 files in same directory and run ruby script file
```shell
ruby dict_gen.rb
```

It will generate new dictionary file in the same directory (./my_dic.dictionary).

### Dictionary Generation Script
```ruby
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
```

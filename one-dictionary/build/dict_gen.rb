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

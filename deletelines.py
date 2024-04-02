def delete_lines(input_file, output_file, lines_to_delete):
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        for i, line in enumerate(infile):
            if i not in lines_to_delete:
                outfile.write(line)

# Specify input and output file paths
input_file = 'hits.txt'
output_file = 'output.txt'

# Define the range of lines to delete (e.g., from line 1000 to line 78000)
lines_to_delete = set(range(1, 78000))

# Call the function to delete lines
delete_lines(input_file, output_file, lines_to_delete)

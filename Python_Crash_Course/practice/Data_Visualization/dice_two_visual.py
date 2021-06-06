from dice_class import Dice

from plotly.graph_objs import Bar, Layout
from plotly import offline

# Create a D6
rolling1 = Dice()
rolling2 = Dice()

# Make some rolls, and store results in a list
results = []
for roll_num in range(1000):
    result = rolling1.roll() + rolling2.roll()
    results.append(result)

# Analyze
frequencies = []
max_result = rolling1.num_sides + rolling2.num_sides
for value in range(2, max_result+1 ):
    frequency = results.count(value)
    frequencies.append(frequency)

# Visualize the results
x_values = list(range(2,max_result + 1))
data = [Bar(x=x_values, y=frequencies)]

x_axis_config = {"title": "Result",  "dtick": 1}
y_axis_config = {"title": "Frequency of Result"}
my_layout =Layout(title="Results of rolling two D6's 1000 times",
        xaxis=x_axis_config,
        yaxis=y_axis_config)

offline.plot({"data":data, "layout":my_layout}, filename="2d6.html")

print(frequencies)
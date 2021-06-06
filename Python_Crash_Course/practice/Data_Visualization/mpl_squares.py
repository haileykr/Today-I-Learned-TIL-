import matplotlib.pyplot as plt
# import the pyplot module using the alias plt
# so we don't have to type pyplot repeatedly

input_values = [1, 2, 3, 4, 5]
squares = [1, 4, 9, 16, 25]

# To use Built-in Plot Styles
plt.style.use('seaborn')

fig, ax = plt.subplots()
# common matplotlib convention
# by calling subplots()
# this function generates one or more plots in the same figure
# variable fig represents the entire figure or collection of plots
# that're generated

# customization
ax.plot(input_values,squares, linewidth = 3)

ax.set_title("Square Numbers", fontsize=24)
ax.set_xlabel("Value", fontsize=14)
ax.set_ylabel("Square of Value", fontsize=14)

ax.tick_params(axis="both", labelsize=14)

plt.show()
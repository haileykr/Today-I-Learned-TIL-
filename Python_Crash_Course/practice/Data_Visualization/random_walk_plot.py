import matplotlib.pyplot as plt

from random_walk import RandomWalk

# Keep making new walks, as long as the program is active.
while True:
    # Make a random walk.
    rw = RandomWalk(50_000)
    rw.fill_walk()

    # plot the points
    plt.style.use("classic")

    # adjust the size of Matplotlib's Output
    fig, ax = plt.subplots(figsize=(15, 9))

    #fig, ax = plt.subplots(figsize=(10,6),dpi=128)

    # to style
    point_numbers = range(rw.num_points)

    ax.scatter(rw.x_values, rw.y_values, c=point_numbers,
               cmap=plt.cm.Blues, edgecolors="none", s=1)

    # emphasize the starting & ending points!!
    ax.scatter(0, 0, c="green", edgecolors="none", s = 100)
    ax.scatter(rw.x_values[-1], rw.y_values[-1], c="red", edgecolors="none", s = 100)

    # turn of the x and y axes
    ax.get_xaxis().set_visible(False)
    
    ax.get_yaxis().set_visible(False)
    
    plt.show()

    keep_running = input("Make another walk? Y/N: ")
    if keep_running == "N":
        break

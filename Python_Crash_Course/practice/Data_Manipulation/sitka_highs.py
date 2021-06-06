import csv

import matplotlib.pyplot as plt
from datetime import datetime

filename = "../data/sitka_weather_2018_simple.csv"

with open(filename) as f:
    reader = csv.reader(f)
    header_row = next(reader)
    # already read the first row
    
    # for index,column_header in enumerate(header_row):
    #     print(index, column_header)

    # Get high temperatures from this file
    dates, highs = [], []
    for row in reader:
        current_date = datetime.strptime(row[2], "%Y-%m-%d")
        high = int(row[5])
        dates.append(current_date)
        highs.append(high)

    # Plot the high temperatures
    plt.style.use("seaborn")
    fig, ax = plt.subplots()
    
    ax.plot(dates, highs, c="green")

    # Format plot
    ax.set_title("Daily high temperatures - 2018",fontsize=14)
    ax.set_xlabel(" ", fontsize=16)
    fig.autofmt_xdate() #draws dates skewed so that they do not overlap!

    ax.set_ylabel("Temperature (F)", fontsize=16)

    ax.tick_params(axis="both", which = "major",labelsize=16)

    plt.show()
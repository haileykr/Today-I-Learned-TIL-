import csv

import matplotlib.pyplot as plt
from datetime import datetime


filename = "../data/death_valley_2018_simple.csv"

with open(filename) as f:
    reader = csv.reader(f)
    header_row = next(reader)
    # already read the first row
    
    # for index,column_header in enumerate(header_row):
    #     print(index, column_header)

    # Get high, low temperatures from this file
    dates, highs, lows = [], [], []
    for row in reader:
        current_date = datetime.strptime(row[2], "%Y-%m-%d")
        # Error Handling
        try:
            high = int(row[4])
            low = int(row[5])
        except ValueError:
            print(f"Missing data for {current_date}")
        else:
        
            dates.append(current_date)
            highs.append(high)
            lows.append(low)

    # Plot the high temperatures
    plt.style.use("seaborn")
    fig, ax = plt.subplots()
    
    ax.plot(dates, highs, c="green", alpha=0.5)
    ax.plot(dates, lows, c="blue", alpha=0.5)

    ax.fill_between(dates, highs, lows, facecolor="yellow", alpha=0.1)

    # Format plot
    ax.set_title("Daily high & low temperatures - 2018 \n Death Valley, CA",fontsize=18)
    ax.set_xlabel(" ", fontsize=16)
    fig.autofmt_xdate() #draws dates skewed so that they do not overlap!

    ax.set_ylabel("Temperature (F)", fontsize=16)

    ax.tick_params(axis="both", which = "major",labelsize=16)

    plt.show()
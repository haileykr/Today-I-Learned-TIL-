# there is more than one page, and subsequent pages look like this "http://quotes.toscrape.com/page/2"
# Use Loop and String concat. to loop through All the pages and get All the unique Authors on the website!

import requests
import bs4

base_url = 'https://quotes.toscrape.com/page/{}'
unique_author_set = set()
counter = 1

while True:
    resource = requests.get(base_url.format(counter))
    soup = bs4.BeautifulSoup(resource.text, "lxml")
    
    if 'No quotes found' in str(soup):
        break
    else:
        authors = soup.select('.author')
    
        for i in range(len(authors)):
            unique_author_set.add(authors[i].text)
        counter += 1
    
print(unique_author_set)
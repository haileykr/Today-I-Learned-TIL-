import requests

from plotly.graph_objs import bar

from plotly import offline

# Make an API call and store the response
url = "https://api.github.com/search/repositories?q=language:python&sort=starts"
headers = {"Accept": "application/vnd.github.v3+json"}
r = requests.get(url, headers=headers)

# Process results
response_dict = r.json()
repo_dict = response_dict["items"]

repo_links, stars, labels=[],[], []
for repo_dict in repo_dict:
    repo_name = repo_dict['name'])
    repo_url= repo_dict["html-url"]
    repo_link = f'<a href="{repo_url}">{repo_name}</a>'
    repo_links.append(repo_link)
    stars.append(repo_dict['stargazers_count'])

    owner = repo_dict["owner"]["login"]
    description =repo_dict["description"]
    label = f"{owner}<br />{description}"
    labels.append(label)

# Make Visualization

data = [{
    "type": "bar",
    "x" : repo_links,
    "y" : stars,
    #styling
    "marker" : {
        "color": "rgb(60, 100, 150)",
        "line": {"width": 1.5, "color": "rgb(25, 25, 25)"}
    },
    "opacity": 0.6,
    "hovertext":labels,
}]

my_layout = {
    "title" : "Most-Starred Python Projects on GitHub",
    
    #styling
    "titlefont": {"size": 28},
    "xaxis": {
        "title" : "Repository",
        "titlefont" : {"size": 24},
        "tickfont" : {"size": 14},
    },
    "yaxis": {
        "title":"Stars",
        "titlefont":{"size":24},
        "tickfont":{"size":14}
    }
}

fig = {"data": data, "layout": my_layout}
offline.plot(fig, filename = "python_repos.html")
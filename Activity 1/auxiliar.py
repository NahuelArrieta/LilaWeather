import json
from urllib.request import urlopen

def getParsedData(url):
    data = urlopen(url)
    return json.loads(data.read())

def printWeek(data):
    days = data['days']
    for i in range(5):
        today = days[i]
        # TODO poner dia (no fecha)
        day = today['datetime']
        min = today['tempmin']
        max = today['tempmax']
        print(f'{day}:   min: {min}°  max: {max}°')


def printProbToday(data):
    for hour in data['days'][0]['hours']:
        currentHour = hour['datetime']
        probability = hour['precipprob']
        print(f'{currentHour}:  {probability}%')


def printProbWeek(data):
    maxProb = 0
    for currentDay in data['days']:
        currentProb = currentDay['precipprob']
        if currentProb >= maxProb:
            maxProb =  currentProb
            day = currentDay['datetime']
    print(f'{day}: {maxProb}%')
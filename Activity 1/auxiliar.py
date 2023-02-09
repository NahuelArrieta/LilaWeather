import json
from urllib.request import urlopen
import datetime

def getParsedData(url):
    data = urlopen(url)
    return json.loads(data.read())

def printWeek(data):
    # Imprime máxima y mínima de los próximos 5 días de la semana
    days = data['days']
    for i in range(5):
        today = days[i]        
        day = datetime.datetime.strptime(today['datetime'],'%Y-%m-%d').strftime('%A')
        min = today['tempmin']
        max = today['tempmax']
        print(f'{day}:  min: {min}°  max: {max}°')


def printProbToday(data):
    # Imprime la probabilidad de lluvia a lo largo del día (cada hora)
    for hour in data['days'][0]['hours']:
        currentHour = hour['datetime']
        probability = hour['precipprob']
        print(f'{currentHour}:  {probability}%')


def printProbWeek(data):
    # Imprime el día de la semana con mayor probabilidad de lluvia 
    maxProb = 0
    for currentDay in data['days']:
        currentProb = currentDay['precipprob']
        if currentProb >= maxProb:
            maxProb =  currentProb
            day = currentDay['datetime']
    print(f'{day}: {maxProb}%')
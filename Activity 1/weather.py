import sys
import json
from auxiliar import *

def main():
    action= sys.argv[1]

    coordinatesFile = open("./coordinates.txt")
    coordinates = json.loads(coordinatesFile.read())
    latitude = coordinates["latitude"]
    longitude = coordinates["longitude"]

    url = f'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{latitude}%2C%20{longitude}/next7days?unitGroup=metric&key=GM9ED2D56JN99DG45BK8DWLEH&contentType=json'

    if action == '-week':
        parsedData = getParsedData(url+ '&include=days')
        printWeek(parsedData)
    
    elif action == '-rainProbabilityToday':
        parsedData = getParsedData(url + '&include=hours')
        printProbToday(parsedData)

    elif action == '-rainProbabilityWeek':
        parsedData = getParsedData(url+ '&include=days')
        printProbWeek(parsedData)
    
    else:
        print("Invalid command")
      

if __name__ == '__main__':
    main()

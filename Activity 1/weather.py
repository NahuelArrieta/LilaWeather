import sys
from auxiliar import *

def main():
    action= sys.argv[1]

    # TODO: Deben ser pasados por textos
    latitude= -32.890034 
    longitude= -68.844536

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
      

if __name__ == '__main__':
    main()

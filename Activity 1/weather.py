import sys
import json
from urllib.request import urlopen




def getParsedData(url):
    data = urlopen(url)
    return json.loads(data.read())


def main():
    action= sys.argv[1]

    # TODO: Deben ser pasados por textos
    latitude= -32.890034 
    longitude= -68.844536

    url = f'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{latitude}%2C%20{longitude}/next7days?unitGroup=metric&key=GM9ED2D56JN99DG45BK8DWLEH&contentType=json'
    
    #url = f'https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}'

    # if action == 'current':
    #     parsedData = getParsedData(url + '&current_weather=true' )
    #     print(parsedData['current_weather']['temperature'])

    if action == '-week':
        parsedData = getParsedData(url+ '&include=days')
        # TODO: printWeek() -> 5 dias 
        print(parsedData['days'][1]['tempmax'])
    
    elif action == '-rainProbabilityToday':
        parsedData = getParsedData(url + '&include=hours')
        # TODO printProbToday()
        print(parsedData['days'][0]['hours'][23]['precipprob'])

    elif action == '-rainProbabilityWeek':
        parsedData = getParsedData(url+ '&include=days')
        # TODO printProbWeek()
        print(parsedData['days'][0]['datetime'])
        print(parsedData['days'][0]['precipprob'])
      

if __name__ == '__main__':
    main()

export interface Location {
    coord: Coordinates
    weather: [Weather]
    main: Main
    base: string
    tempC: number
}

export interface Coordinates {
    lon: number
    lat: number
}
export interface Weather {
    id: number
    main: string
    description: string
}
export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}